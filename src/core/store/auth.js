export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUt';

export function auth (store) {
    // This is only to make sure the state management is working properly
    store.on('@init', () => ({ isAuthenticated: true }));

    store.on(SIGN_IN, () => {
        return { isAuthenticated: true };
    });

    store.on(SIGN_OUT, () => {
        return { isAuthenticated: false };
    });
}
