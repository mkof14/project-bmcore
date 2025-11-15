export const supabase = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signOut: async () => ({ error: null }),
    signUp: async () => ({ data: null, error: null }),
    signInWithOAuth: async () => ({ data: null, error: null }),
    linkIdentity: async () => ({ data: null, error: null }),
    unlinkIdentity: async () => ({ data: null, error: null }),
    resetPasswordForEmail: async () => ({ data: null, error: null })
  },
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null }),
    upsert: () => ({ data: null, error: null }),
    eq: () => ({ data: [], error: null })
  }),
  storage: {
    from: () => ({
      upload: async () => ({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: "" }})
    })
  },
  rpc: async () => ({ data: null, error: null }),
  channel: () => ({
    send: () => {},
    on: () => {},
    subscribe: () => {},
    unsubscribe: () => {}
  })
}
