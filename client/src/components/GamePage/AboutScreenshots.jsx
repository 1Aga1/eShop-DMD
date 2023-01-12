import React, {useState} from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";
import ScreenshotsAndAboutBtn from "../UI/MyButton/ScreenshotsAndAbout/ScreenshotsAndAboutBtn";
import notfound from "../../images/img_n_found.png";


const AboutScreenshots = ({GameData}) => {
    const [isShowScreenshots,SetShowScreenshots] = useState(true)
    const [isShowAbout,SetShowAbout] = useState(false)

    const SwitchToScreenshots = () => {
        SetShowScreenshots(true);
        SetShowAbout(false);
    }

    const SwitchToAbout = () => {
        SetShowScreenshots(false);
        SetShowAbout(true);
    }

    return (
        <div className={classes.game__about__screenshots}>
            <div className={classes.btn__block}>
                <ScreenshotsAndAboutBtn onClick={SwitchToScreenshots}>Скриншоты</ScreenshotsAndAboutBtn>
                <ScreenshotsAndAboutBtn onClick={SwitchToAbout}>Об игре</ScreenshotsAndAboutBtn>
            </div>
            {isShowScreenshots &&
                <div className={classes.screenshots}>
                    <img src={notfound} alt="trevor"/>
                    <img src={notfound} alt="car"/>
                </div>
            }
            {isShowAbout &&
                <div className={classes.game__about}>
                    <p>{GameData['about_game']}</p>
                </div>
            }
        </div>
    );
};

export default AboutScreenshots;