import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    timer: 3000,
    timerProgressBar: true,
})