import { AppStateType } from "app/model/redux-store";
import SuperSelect from "common/components/super-select/super-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThemeTC, changeThemeTC } from "../model/theme-reducer";
import classes from "./theme.module.css";

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "dark" },
];

const Theme = () => {
  const themeId = useSelector<AppStateType, number>(
    (state) => state.theme.themeId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemeTC());
  }, []);

  const change = (id: number) => {
    dispatch(changeThemeTC(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div>
      <SuperSelect
        id={"hw12-select-theme"}
        className={classes.select}
        onChangeOption={change}
        options={themes}
        value={themeId}
      />
    </div>
  );
};

export default Theme;
