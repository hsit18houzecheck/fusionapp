import type { FieldsErrProps } from "./types";

function FieldsErr({ fieldLabels, errors, touched }: FieldsErrProps) {
  const allErrors = Object.keys(errors).map(
    (value) => touched[value] && <li key={value}>{fieldLabels[value]}</li>
  );
  if (JSON.stringify(errors).length > 2) {
    return (
      <div className="mt-5" style={{ color: "red" }}>
        {allErrors.some((item) => item !== undefined) && (
          <>
            <p>The following questions must be answered:</p>
            <ul>{allErrors}</ul>
          </>
        )}
      </div>
    );
  }
  return null;
}

export default FieldsErr;
