import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showToast(toastBgColor = "blue", toastMessage = "No text for this toast.") {
  Toastify({
    text: toastMessage,
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: toastBgColor,
      fontFamily: 'Inter-Regular',
      borderRadius: '6px',
    },
    stopOnFocus: true,
  }).showToast();
}