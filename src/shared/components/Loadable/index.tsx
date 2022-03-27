import { Suspense } from "react";

import { LoadingScreen } from "../LoadingScreen";

export const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense
            fallback={
                <LoadingScreen
                    sx={{
                        top: 0,
                        left: 0,
                        width: 1,
                        zIndex: 1,
                        position: "fixed",
                    }}
                />
            }
        >
            <Component {...props} />
        </Suspense>
    );
};
