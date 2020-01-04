import React from "react";
import css from "@emotion/css";
import { GoRepoForked, GoStar } from "react-icons/all";
import ColorSet from "../styles/github-language-colors";

interface IProps {
  type: "star" | "forked" | keyof typeof ColorSet;
  children: React.ReactNode;
}

const RepositoryRowBottomIconSet = (props: IProps) => {
  const icon = () => {
    switch (props.type) {
      case "star":
        return <GoStar css={styles.icon} size={17} />;
      case "forked":
        return <GoRepoForked css={styles.icon} size={17} />;
      default:
        return (
          <span
            css={[
              styles.circle,
              css`
                background-color: ${ColorSet[props.type]};
              `
            ]}
          />
        );
    }
  };

  return (
    <div css={styles.wrap}>
      {icon()}
      <span>{props.children}</span>
    </div>
  );
};

const styles = {
  wrap: css`
    display: flex;
    align-items: center;
    margin-right: 20px;
  `,
  circle: css`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
  `,
  icon: css`
    margin-right: 5px;
  `
};

export default RepositoryRowBottomIconSet;