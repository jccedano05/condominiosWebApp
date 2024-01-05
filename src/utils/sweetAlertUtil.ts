import Swal from "sweetalert2";

interface Props {
  title?: string;
  description?: string;
}

export const swalSucces = ({ title = "Success", description = "" }: Props) => {
  Swal.fire({
    title,
    text: description,
    icon: "success",
  });
};

export const swalError = ({
  title = "Error",
  description = "Something Wrong",
}: Props) => {
  Swal.fire({
    title,
    text: description,
    icon: "error",
  });
};
