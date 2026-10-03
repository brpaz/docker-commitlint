FROM node:22-alpine

ARG COMMITLINT_VERSION=19.3.0
ENV COMMITLINT_VERSION=${COMMITLINT_VERSION}

RUN npm install -g @commitlint/cli@${COMMITLINT_VERSION} @commitlint/config-conventional

ENTRYPOINT [ "commitlint"]