import { signIn, signOut, getSession } from 'next-auth/react';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> {
    try {
      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        return { success: false, error: 'Invalid credentials' };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'An error occurred during login' };
    }
  }

  static async logout(): Promise<void> {
    await signOut({ callbackUrl: '/auth/signin' });
  }

  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const session = await getSession();
      return session?.user || null;
    } catch (error) {
      return null;
    }
  }

  static async isAuthenticated(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return !!user;
  }

  static async hasRole(role: string): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user?.role === role;
  }
}
