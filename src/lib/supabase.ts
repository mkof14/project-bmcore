export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: (_callback: any) => ({
      data: { subscription: { unsubscribe() {} } }
    }),
    getUser: async () => ({ data: { user: null }, error: null })
  },
  from: (_table: string) => {
    const chain = {
      select: async () => ({ data: null, error: null, count: null }),
      insert: async () => ({ data: null, error: null }),
      update: async () => ({ data: null, error: null }),
      delete: async () => ({ data: null, error: null }),
      eq: () => chain,
      in: () => chain,
      order: () => chain,
      limit: () => chain,
      maybeSingle: async () => ({ data: null, error: null }),
      single: async () => ({ data: null, error: null }),
      upsert: async () => ({ data: null, error: null }),
      head: () => chain
    };
    return chain;
  },
  rpc: async () => ({ data: null, error: null }),
  storage: {
    from: (_bucket: string) => ({
      upload: async () => ({ data: null, error: null }),
      download: async () => ({ data: null, error: null }),
      list: async () => ({ data: null, error: null }),
      remove: async () => ({ data: null, error: null }),
      getPublicUrl: (_path: string) => ({ data: { publicUrl: "" } })
    })
  }
} as any;
