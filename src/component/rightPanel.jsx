import React from "react";
import { Image } from "react-bootstrap";
import "../design/component/panel/rightPanel.css";
import "../design/user-avatar/main.scss";

const RightPanel = () => {
  return (
    <React.Fragment>
      <div
        className="rightPanel"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 20px 0px",
          background: "#1d2333",
          overflow: "hidden scroll",
        }}
      >
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline online">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile01"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                24
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile02"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                10
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline away">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile03"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                30
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile04"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                5
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline online">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile05"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                13
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile06"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                22
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline online">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile07"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                10
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile08"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                09
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline online">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile11"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                27
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ padding: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile09"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ color: "white", fontFamily: "RajdhaniBold" }}
              >
                5
              </p>
            </div>
          </div>
        </div>
        <div className="icons" style={{ paddingBottom: 0 }}>
          <div className="user-avatar small no-outline offline">
            <div className="user-avatar-content">
              <div
                className="hexagon-image-30-32"
                id="imageProfile10"
                style={{ width: 30, height: 32, position: "relative" }}
              >
                <canvas
                  height={32}
                  width={30}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            </div>
            <div className="user-avatar-progress">
              <div className="hexagon-progress-40-44">
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-progress-border">
              <div
                className="hexagon-border-40-44"
                style={{ width: 40, height: 44, position: "relative" }}
              >
                <canvas
                  width={40}
                  height={44}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <div
                  className="hexagon-22-24"
                  style={{ width: 22, height: 24, position: "relative" }}
                >
                  {" "}
                  <canvas
                    width={22}
                    height={24}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge-content">
                <div
                  className="hexagon-dark-16-18"
                  style={{ width: 16, height: 18, position: "relative" }}
                >
                  <canvas
                    width={16}
                    height={18}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <p
                className="user-avatar-badge-text"
                style={{ fontFamily: "RajdhaniBold" }}
              >
                24
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightPanel;
