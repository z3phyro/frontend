export const ADD_ONE = 'project/add-one';

export function projects (store) {
    store.on('@init', () => ({ projects: 0 }))

    store.on(ADD_ONE, ({ projects }) => {
        return { projects: ++projects }
    })
}
