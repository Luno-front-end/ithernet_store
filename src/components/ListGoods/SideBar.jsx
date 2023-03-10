import { useState } from "react";
import style from "./style/sideBar.module.scss";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const SideBar = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const selectNameInput = e.target.name;
    const valueInput = e.target.value;

    console.log();

    const check = e.target.checked;
    if (check) {
      props.setValueInput((prev) => {
        return {
          ...prev,
          [selectNameInput]: [...prev[selectNameInput], valueInput],
        };
      });
    } else {
      props.setValueInput((prev) => {
        const deleteEl = prev[selectNameInput].filter(
          (el) => el !== valueInput
        );
        return { ...prev, [selectNameInput]: [...deleteEl] };
      });
    }
  };

  const toggleSlider = (e) => {
    console.log(e.target);
    document.querySelector("body").classList.add("off-scroll");
    setOpen(!open);
  };

  return (
    <>
      <div className={style.btnWrapper}>
        <button type="button" onClick={toggleSlider} className={style.btnOpen}>
          Категорії
        </button>
      </div>
      <div
        className={
          open
            ? `${style.containerSideBarActive} ${style.containerSideBar}`
            : style.containerSideBar
        }
        onClick={toggleSlider}
      >
        <div
          className={
            open
              ? `${style.open} ${style.wrapperSideBar}`
              : style.wrapperSideBar
          }
        >
          <div className={style.side_bar}>
            <div className={style.fixedBar}>
              <div>
                <p className={style.headerBar}>Категорія</p>
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" id="tv" />}
                      label="Телевізори"
                      value="tv"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" id="phone" />}
                      label="Телефони"
                      value="phone"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Ноутбуки"
                      value="notebook"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Монітори"
                      value="monitor"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Фотоапарати"
                      value="camera"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Смарт годинники"
                      value="bracelet"
                      name="type"
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
              <div>
                <p className={style.headerBar}>Бренд</p>
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Apple"
                      value="apple"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Xiaomi"
                      value="xiaomi"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Sony"
                      value="sony"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Ergo"
                      value="ergo"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="HP"
                      value="hp"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="DELL"
                      value="dell"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="LG"
                      value="lg"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Canon"
                      value="canon"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="Panasonic"
                      value="panasonic"
                      name="brand"
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
              <div>
                <p className={style.headerBar}>Діагональ</p>
                <ul>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="2"
                      value="2"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="4"
                      value="4"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="4.2"
                      value="4.2"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="5"
                      value="5"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="14"
                      value="14"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="15"
                      value="15"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="16"
                      value="16"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="24"
                      value="24"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="27"
                      value="27"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="32"
                      value="32"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="42"
                      value="42"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      control={<Checkbox color="default" />}
                      label="50"
                      value="50"
                      name="diagonal"
                      onChange={handleChange}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//
