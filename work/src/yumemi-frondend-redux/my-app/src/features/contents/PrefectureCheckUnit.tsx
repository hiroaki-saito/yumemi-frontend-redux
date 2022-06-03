import React from "react";

const PrefectureCheckUnit = (props: any) => {
  const onClickChekbox = props.onClickChekbox;
  return (
    <div>
      <input type="checkbox" name="name" onClick={onClickChekbox} />
      <label>aaa</label>
    </div>
  );
};

export default PrefectureCheckUnit;
