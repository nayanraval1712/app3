import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function showError(message) {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}
export function NetworkError()
{
    showError('oops something went wrong, please try after sometime.');
}

export function showMessage(message) {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}