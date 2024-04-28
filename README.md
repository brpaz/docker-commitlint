 # Docker Commitlint

> A docker image for running [Commitlint](https://commitlint.js.org/#/). It includes `@commitlint/cli`and  `@commitlint/config-conventional`

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/brpaz/docker-commitlint/ci.yml?style=for-the-badge)](https://github.com/brpaz/docker-commitlint/actions/workflows/ci.yml)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/brpaz/commitlint?style=for-the-badge)
![Docker Image Size](https://img.shields.io/docker/image-size/brpaz/commitlint?style=for-the-badge)
[![Docker Pulls](https://img.shields.io/docker/pulls/brpaz/commitlint.svg?style=for-the-badge)](https://hub.docker.com/repository/docker/brpaz/commitlint/general)
![LICENSE](https://img.shields.io/github/license/brpaz/docker-commitlint?style=for-the-badge)

## 🚀 Getting Started

### Installation

You can download this image from DockerHub or GitHub Package registry

```sh
docker pull /brpaz/docker-commitlint
```

```sh
docker pull ghcr.io/brpaz/docker-commitlint
```

### Usage

For commitlint to be able to work, you must mount your project directory in the container.

Ex:

```sh
docker run --rm -it -v $(pwd):/code  -w /code ghrc.io/brpaz/docker-commitlint:19.3.0 --edit
```

Or using `stdin`:

```sh
echo "foo" | docker -i run ghrc.io/brpaz/docker-commitlint:19.3.0
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 💛 Support the project

If this project was useful to you in some form, I would be glad to have your support.  It will help to keep the project alive and to have more time to work on Open Source.

The sinplest form of support is to give a ⭐️ to this repo.

You can also contribute with [GitHub Sponsors](https://github.com/sponsors/brpaz).

[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Sponsor%20Me-red?style=for-the-badge)](https://github.com/sponsors/brpaz)

Or if you prefer a one time donation to the project, you can simple:

<a href="https://www.buymeacoffee.com/Z1Bu6asGV" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Author

👤 **Bruno Paz**

* Website: [brunopaz.dev](https://brunopaz.net)
* Github: [@brpaz](https://github.com/brpaz)

## 📝 License

Copyright © 2023 [Bruno Paz](https://github.com/brpaz).

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
