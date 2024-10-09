import Swal from "sweetalert2";

export const toast = (type: any = 'success', message: string) => {
    Swal.fire({
        toast: true,
        icon: type,
        position: 'top-right',
        showConfirmButton: false,
        title: message,
        timer: 3000
    })
}
