import React, {useState} from 'react';
import classes from "../../pages/NewProduct/NewProduct.module.css";
import ScreenshotsAndAboutBtn from "../UI/MyButton/ScreenshotsAndAbout/ScreenshotsAndAboutBtn";

const AboutScreenshots = ({gameInfo, setGameInfo}) => {
    const [isShowScreenshots, SetShowScreenshots] = useState(true);

    const addScreenshot = (img) => {
        const screenshot = new FormData();
        screenshot.append("file", img)

        fetch("/api/upload_file", {
            method: "POST",
            body: screenshot,
        })
            .then(response => response.json())
            .then(response => {
                if (response['status'] === "done") {
                    setGameInfo({...gameInfo, screenshots: [...gameInfo['screenshots'], response['filename']]});
                }
            });
    };

    const deleteScreenshot = () => {
        fetch("/api/delete_file", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(gameInfo['screenshots']),
        })
            .then(response => response.json())
            .then(response => {
                if (response['status'] === "done") {
                    setGameInfo({...gameInfo, screenshots: []})
                }
            });
    };

    return (
        <div className={classes.game__about__screenshots}>
            <div className={classes.btn__block}>
                <ScreenshotsAndAboutBtn onClick={() => (SetShowScreenshots(true))}>Скриншоты</ScreenshotsAndAboutBtn>
                <ScreenshotsAndAboutBtn onClick={() => (SetShowScreenshots(false))}>Об игре</ScreenshotsAndAboutBtn>
            </div>

            {isShowScreenshots === true
                ?
                    <div className={classes.screenshots}>
                        <div className={classes.screenshots__block}>
                            {gameInfo['screenshots'].map((screenshot, index) =>
                                screenshot &&
                                <div className={classes.selected__img} key={index}>
                                    <img alt="not found" src={'http://localhost:5000/api/app/images/'+screenshot}/>
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
                :
                    <div className={classes.game__about}>
                        <textarea onChange={e => (setGameInfo({...gameInfo, about_game: e.target.value}))}>{gameInfo['about_game']}</textarea>
                    </div>
            }
        </div>
    );
};

export default AboutScreenshots;