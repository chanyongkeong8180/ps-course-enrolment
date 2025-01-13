import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const { name, desc, chair } = getModule({ diplomaId, moduleId });
  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>Module Chair</h4>
      <p>{chair}</p>
    </>
  );
}
