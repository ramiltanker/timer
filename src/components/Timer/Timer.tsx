import React, { useContext } from "react";
// Styles
import styles from "./Timer.module.css";
// Styles

// Components
import TimeWrapper from "../TimeWrapper/TimeWrapper";
import Button from "../Button/Button";
import Indicator from "../Indicator/Indicator";
// Components

import classNames from "classnames";

import { ThemeContext } from "../../providers/ThemeProvider";

type TTime = {
  [key: string]: string;
};

const Timer = () => {
  const { type } = useContext(ThemeContext);

  const [time, setTime] = React.useState<TTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [totalTime, setTotalTime] = React.useState<any>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [timerStart, setTimerStart] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const indicatorRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;

    setTotalTime((state: any) => {
      state[name] = target.value;
      return { ...state };
    });

    setTime((state) => {
      state[name] = target.value;
      return { ...state };
    });
  };

  React.useEffect(() => {
    let hours = Number(time.hours);
    let minutes = Number(time.minutes);
    let seconds = Number(time.seconds);
    // Длина шкалы прогреса
    let containerWidth = containerRef!.current!.clientWidth;
    // Длина шкалы прогреса
    // Оставшееся время
    const timeLeft = hours * 60 * 60 + minutes * 60 + seconds;
    // Оставшееся время
    // Общее кол-во времени
    const total =
      Number(totalTime.hours) * 60 * 60 +
      Number(totalTime.minutes) * 60 +
      Number(totalTime.seconds);
    // Общее кол-во времени

    if (timeLeft >= 0) {
      indicatorRef!.current!.style.transform = `translateX(${
        (timeLeft * containerWidth!) / total - containerWidth
      }px)`;
    }

    if (timeLeft <= 0) {
      setTotalTime({
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    }

    return () => {
      indicatorRef!.current!.style.transform = `translateX(0px)`;
    };
  }, [time.hours, time.minutes, time.seconds]);

  React.useEffect(() => {
    let hours = Number(time.hours);
    let minutes = Number(time.minutes);
    let seconds = Number(time.seconds);

    const timer = setInterval(() => {
      if ((hours > 0 || minutes > 0 || seconds > 0) && timerStart) {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours > 0) {
              hours = hours - 1;
              minutes = 60;
              setTime((state) => {
                state["hours"] = hours + "";
                state["minutes"] = minutes + "";
                return { ...state };
              });
            }
          } else {
            minutes = minutes - 1;
            seconds = 59;
            setTime((state) => {
              state["seconds"] = seconds + "";
              state["minutes"] = minutes + "";
              return { ...state };
            });
          }
        } else {
          seconds = seconds - 1;
          setTime((state) => {
            state["seconds"] = seconds + "";
            return { ...state };
          });
        }
      } else {
        setTimerStart(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timerStart, time.seconds]);

  const handleReset = () => {
    setTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    setTotalTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    indicatorRef!.current!.style.transform = "translateX(0px)";
    setTimerStart(false);
  };

  return (
    <section className={styles.timer}>
      <div
        className={classNames(styles.container, type === "dark" && styles.dark)}
        ref={containerRef}
      >
        <h2
          className={classNames(styles.title, type === "dark" && styles.dark)}
        >
          TIMER
        </h2>
        <TimeWrapper
          handleChange={handleChange}
          time={time}
          timerStart={timerStart}
        />
        <div className={styles.buttons}>
          <Button
            backgroundColor="#03AE85"
            marginRight="15px"
            text="START"
            onClick={() => setTimerStart(true)}
          />
          <Button
            backgroundColor="transparent"
            borderColor="#D1D1D1"
            marginRight="15px"
            text="PAUSE"
            color={`${type === "dark" ? "#FFFFFF" : "#323232"}`}
            onClick={() => setTimerStart(false)}
          />
          <Button
            backgroundColor="#FD6259"
            text="RESET"
            onClick={handleReset}
          />
        </div>
        <Indicator indicatorRef={indicatorRef} />
      </div>
    </section>
  );
};

export default Timer;
