import React from "react";
import css from "@emotion/css";
import RepositoryRowBottomIconSet from "./RepositoryRowBottomIconSet";
import ColorSet from "../styles/github-language-colors";
import { majorName } from "../utils/major";
import ClickPopDiv from "./ClickPop"
import RepositoryRowBottomIconSetHover from "./RepositoryRowBottomIconSetHover";

interface IProps {
  username: string;
  repository: string;
  language: keyof typeof ColorSet;
  description: string;
  star: number | string;
  forked: number | string;
  user: {
    th: string;
    major: keyof typeof majorName;
    name: string;
  };
}

const RepositoryRow = ({
  username,
  repository,
  language,
  description,
  star,
  forked,
  user,
  ...props
}: IProps) => {
  return (
    <ClickPopDiv css={styles.container}>
      <div css={styles.leftWrap}>
        <a
          href={`https://github.com/${username}/${repository}`}
          css={styles.username}
        >
          {username}/<span css={styles.repository}>{repository}</span>
        </a>
        <span css={styles.description}>{description}</span>
        <div css={styles.bottomWrap}>
          <RepositoryRowBottomIconSet type={language}>
            {language}
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="star" css={styles.starSet}>
            {star}
            <RepositoryRowBottomIconSetHover
              name="Stargazer"
              users={[
                "yooonspace",
                "cokia",
                "header1213",
                "reeactdev",
                "Gijuno-Dev"
              ]}
            />
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="forked">
            {forked}
          </RepositoryRowBottomIconSet>
          <RepositoryRowBottomIconSet type="user" css={styles.userInfo}>
            {user.th}기 {majorName[user.major]} {user.name}
          </RepositoryRowBottomIconSet>
        </div>
      </div>
      <a href={`https://github.com/${username}`} css={styles.profileImageA}>
        <img
          src={`https://github.com/${username}.png`}
          css={styles.profileImage}
          alt={`${username}'s profile`}
        />
      </a>
    </ClickPopDiv>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e4e8;
    padding: 1.875em 0;
    transition: 300ms;
    transition-timing-function: cubic-bezier(.06,.67,.24,.91);
    & :first-of-type {
      padding-top: 0;
    }
    & :last-child {
      border: 0;
      padding-bottom: 0;
    }
    & :hover {
      transform: translateY(-3px);
    }
  `,
  leftWrap: css`
    max-width: 80%;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `,
  username: css`
    display: block;
    color: #0366d6;
    font-size: 1.25rem;
    cursor: pointer;
    margin-bottom: 1.25em;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  `,
  repository: css`
    font-weight: 700;
  `,
  description: css`
    display: block;
    margin-bottom: 1.25em;
    line-height: 1.4;
  `,
  bottomWrap: css`
    display: flex;
    font-size: 0.875rem;
  `,
  profileImageA: css`
    margin: auto 0;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  profileImage: css`
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
  `,
  userInfo: css`
    @media (max-width: 767px) {
      display: none;
    }
  `,
  starSet: css`
    cursor: pointer;
    & :hover > div {
      display: flex;
    }
  `
};

export default RepositoryRow;
