import React, {useState} from 'react';
import classes from "../../pages/NewProduct/NewProduct.module.css";
import ScreenshotsAndAboutBtn from "../UI/MyButton/ScreenshotsAndAbout/ScreenshotsAndAboutBtn";

const AboutScreenshots = ({gameInfo, setGameInfo}) => {
    const [isShowScreenshots, SetShowScreenshots] = useState(true);
    const [isShowAbout, SetShowAbout] = useState(false);

    const SwitchToScreenshots = () => {
        SetShowScreenshots(true);
        SetShowAbout(false);
    };

    const SwitchToAbout = () => {
        SetShowScreenshots(false);
        SetShowAbout(true);
    };

    const addScreenshot = (img) => {
        setGameInfo({...gameInfo, screenshots: [...gameInfo['screenshots'], img]})

        // if (!("screenshots" in screenshots)) {
        //     screenshots.append("screenshots", [img]);
        // } else {
        //     screenshots['screenshots'] = [...screenshots['screenshots'], img];
        // };
        //
        // console.log(screenshots);
    };

    const deleteScreenshot = () => {
        setGameInfo({...gameInfo, screenshots: []})
        // picture.delete("screenshots");
    };

    return (
        <div className={classes.game__about__screenshots}>
            <div className={classes.btn__block}>
                <ScreenshotsAndAboutBtn onClick={SwitchToScreenshots}>Скриншоты</ScreenshotsAndAboutBtn>
                <ScreenshotsAndAboutBtn onClick={SwitchToAbout}>Об игре</ScreenshotsAndAboutBtn>
            </div>

            {isShowScreenshots &&
                <div className={classes.screenshots}>
                    <div className={classes.screenshots__block}>
                        {gameInfo['screenshots'].map((screenshot, index) =>
                            screenshot &&
                            <div className={classes.selected__img} key={index}>
                                <img alt="not found"  src={URL.createObjectURL(screenshot)}/>
                            </div>
                        )}
                    </div>
                    <div className={classes.btn__block}>
                        <label className={classes.input__file}>
                            <input type="file" name="file"
                                   onChange={e => (addScreenshot(e.target.files[0]))}/>
                            <span>Выберите файл</span>
                        </label>
                        <button className={classes.delete__img} onClick={() => (deleteScreenshot())}>Удалить</button>
                    </div>
                </div>
            }

            {isShowAbout &&
                <div className={classes.game__about}>
                    <textarea onChange={e => (setGameInfo({...gameInfo, about_game: e.target.value}))}>{gameInfo['about_game']}</textarea>
                </div>
            }
        </div>
    );
};

export default AboutScreenshots;