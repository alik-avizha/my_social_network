import React, {Component, ComponentType} from 'react';
import {Preloader} from 'common/components';


export function withSuspense(Component: ComponentType) {
    return () => {
        return <React.Suspense fallback={<Preloader/>}><Component /></React.Suspense>
    }
}
