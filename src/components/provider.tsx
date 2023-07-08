'use client'
import {store} from '@/store/store'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster position="top-right" reverseOrder={true} />
        </Provider>
    )
}

export default Providers