import React, {useState} from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";
import ScreenshotsAndAboutBtn from "../UI/MyButton/ScreenshotsAndAbout/ScreenshotsAndAboutBtn";

const AboutScreenshots = ({screenshots, about_game}) => {
    const [isShowScreenshots,SetShowScreenshots] = useState(false)

    return (
        <div className={classes.game__about__screenshots}>
            <div className={classes.btn__block}>
                <ScreenshotsAndAboutBtn onClick={() => (SetShowScreenshots(true))}>Скриншоты</ScreenshotsAndAboutBtn>
                <ScreenshotsAndAboutBtn onClick={() => (SetShowScreenshots(false))}>Об игре</ScreenshotsAndAboutBtn>
            </div>
            {isShowScreenshots === true
                ?
                    <div className={classes.screenshots}>
                        {
                            screenshots.map((screenshot, index) =>
                                <img src={'http://localhost:5000/api/app/images/' + screenshot} alt="" key={index}/>
                            )
                        }

                    </div>
                :
                    <div className={classes.game__about}>
                        <p>{about_game}</p>
                    </div>
            }
        </div>
    );
};

export default AboutScreenshots;