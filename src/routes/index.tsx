import {
    RouterProvider,
    Link,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import Protected from "./protected";

import { Home } from "@/app/screens/Home";
import Store from "@/app/screens/Store";

const router = createBrowserRouter(
    [
        {
            path: "/",
            index: true,
            element: <Home />
        },
        {
            path: "/store/:id",
            index: true,
            element: <Store />
        },
        {
            path: "/signin",
            element: (
                <>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/doctors">Doctors</Link>
                </>
            )
        },
        {
            path: "/protected",
            element: <Protected />,
            children: [
                {
                    index: true,
                    element: <h1>Index</h1>
                },

            ]
        },
        {
            path: "*",
            element: (
                <>
                    Not Found!
                </>
            )
        }
    ]
);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/">
//             <Route index element={<Home />} />
//             {/* <Route element={<Protected />}> */}
//                 {/* All other routes that you want to protect will go inside here */}
//             {/* </Route> */}
//             {/* <Route
//                 path="sign-in"
//                 element={<Signin />}
//                 loader={async () => await isAuthenticated()} />
//             <Route
//                 path="sign-up"
//                 element={<Signup />}
//                 loader={async () => await isAuthenticated()} /> */}
//             <Route path="*" element={<h1>Page not found</h1>} />
//         </Route>
//     )
// );

const Index = () => {
    return <RouterProvider router={router} />;
};

export default Index;
