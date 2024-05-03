import Protected from "./protected"

export const PrivateRoute = () => {
    return {
        path: "/",
        element: <Protected />,
        children: [
            {
                index: true,
                element: <h1>Index</h1>
            },

        ]
    }
}
