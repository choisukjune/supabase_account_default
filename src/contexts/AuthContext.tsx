import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AuthContextType {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ 
  session: null, 
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setSession(null);
      toast.success('✨ You have been signed out.');
    } catch (error: any) {
      console.error('Sign out error:', error);
      // If we get a user_not_found error, the session is already invalid
      // so we should clear it locally
      if (error.message?.includes('user_not_found')) {
        setSession(null);
        toast.success('✨ You have been signed out.');
      } else {
        toast.error('✨ An error occurred while signing out.');
      }
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading, signOut: handleSignOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);