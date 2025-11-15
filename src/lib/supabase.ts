type SupabaseResult = { data?: any; error?: any; count?: number }

class SupabaseQuery implements PromiseLike<SupabaseResult> {
  result: SupabaseResult
  constructor() {
    this.result = { data: null, error: null, count: 0 }
  }
  select(...args: any[]): SupabaseQuery {
    return this
  }
  eq(...args: any[]): SupabaseQuery {
    return this
  }
  order(...args: any[]): SupabaseQuery {
    return this
  }
  limit(...args: any[]): SupabaseQuery {
    return this
  }
  maybeSingle(...args: any[]): SupabaseQuery {
    return this
  }
  lt(...args: any[]): SupabaseQuery {
    return this
  }
  insert(...args: any[]): SupabaseQuery {
    return this
  }
  update(...args: any[]): SupabaseQuery {
    return this
  }
  delete(...args: any[]): SupabaseQuery {
    return this
  }
  upsert(...args: any[]): SupabaseQuery {
    return this
  }
  then<TResult1 = SupabaseResult, TResult2 = never>(
    onfulfilled?: ((value: SupabaseResult) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): Promise<TResult1 | TResult2> {
    return Promise.resolve(this.result).then(onfulfilled as any, onrejected as any)
  }
  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null
  ): Promise<SupabaseResult | TResult> {
    return Promise.resolve(this.result).catch(onrejected as any)
  }
  finally(onfinally?: (() => void) | null): Promise<SupabaseResult> {
    return Promise.resolve(this.result).finally(onfinally as any)
  }
}

type SupabaseAuthUserData = { user: any }
type SupabaseAuthResult = { data: SupabaseAuthUserData; error: any }

const defaultResult: SupabaseResult = { data: null, error: null, count: 0 }

export const supabase = {
  from(table: string): SupabaseQuery {
    return new SupabaseQuery()
  },
  rpc(name: string, params?: any): Promise<SupabaseResult> {
    return Promise.resolve({ ...defaultResult })
  },
  auth: {
    async getUser(token?: string): Promise<SupabaseAuthResult> {
      return { data: { user: null }, error: null }
    },
    async signOut(): Promise<{ error: any }> {
      return { error: null }
    },
    async signInWithOAuth(options: any): Promise<{ data: any; error: any }> {
      return { data: null, error: null }
    },
    async signUp(options: any): Promise<{ data: any; error: any }> {
      return { data: null, error: null }
    },
    async linkIdentity(options: any): Promise<{ error: any }> {
      return { error: null }
    },
    async unlinkIdentity(identity: any): Promise<{ error: any }> {
      return { error: null }
    },
    async resetPasswordForEmail(email: string, options?: any): Promise<{ data: any; error: any }> {
      return { data: null, error: null }
    },
    admin: {
      async deleteUser(userId: string): Promise<{ error: any }> {
        return { error: null }
      }
    }
  },
  channel(name: string) {
    const channel = {
      on(event: string, filter: any, callback: any) {
        return channel
      },
      subscribe(callback?: any) {
        if (callback) {
          callback("SUBSCRIBED")
        }
        return channel
      },
      unsubscribe() {
        return
      }
    }
    return channel
  },
  removeChannel(channel: any): Promise<{ error: any }> {
    return Promise.resolve({ error: null })
  },
  removeAllChannels(): Promise<{ error: any }> {
    return Promise.resolve({ error: null })
  },
  storage: {
    from(bucket: string) {
      return {
        async upload(path: string, file: any, options?: any): Promise<{ data: any; error: any }> {
          return { data: null, error: null }
        },
        getPublicUrl(path: string): { data: { publicUrl: string } } {
          return { data: { publicUrl: "" } }
        },
        async remove(paths: string[]): Promise<{ data: any; error: any }> {
          return { data: null, error: null }
        }
      }
    }
  }
} as const
