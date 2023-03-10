import { createElement } from './utils.js';
import { landingMoviesContainer } from './const.js';
import { mediaMovieIcon, mediaTvIcon } from './images.js';
import { IMAGE_URL } from './api-request.js';
const numberOfGalleryItems = 6;

const landingShow = () => {
  if (landingMoviesContainer.classList.contains('landing-container--unshow')) {
    landingMoviesContainer.classList.remove('landing-container--unshow');
  } else {
    landingMoviesContainer.classList.add('landing-container--unshow');
  }
};

const createGallerySections = (
  sections,
  title,
  media,
  dataType,
  dataCategory
) => {
  const fragmentSection = document.createDocumentFragment();
  const sectionLanding = createElement('section', [
    'section',
    'section--landing'
  ]);
  const sectionLandingTop = createElement('div', ['section__top']);
  const sectionLandingTitle = createElement(
    'h2',
    ['title', 'title--sections'],
    title
  );
  const sectionLandingButtonMedia = createElement(
    'p',
    sections[0].title
      ? ['button', 'button--media']
      : ['button', 'button--media', 'button--media-tv'],
    media
  );
  const sectionLandingButtonSeeAll = createElement(
    'a',
    ['button', `button--see-all-${dataType}`],
    'SEE ALL',
    'undefined',
    dataType.toUpperCase(),
    dataCategory
  );

  sectionLandingTop.append(
    sectionLandingTitle,
    sectionLandingButtonMedia,
    sectionLandingButtonSeeAll
  );
  const gallery = createElement('div', ['gallery']);

  for (let index = 0; index < numberOfGalleryItems; index++) {
    const galleryItem = createElement(
      'div',
      index === 4
        ? ['gallery__item--5']
        : index === 5
        ? ['gallery__item--6']
        : ['gallery__item'],
      '',
      sections[index].id,
      dataType
    );
    const galleryImage = createElement(
      'img',
      ['gallery__image'],
      IMAGE_URL + sections[index].backdrop_path
    );
    const galleryItemBookmarkContainer = createElement('div', [
      'bookmark-gallery'
    ]);
    const galleryItemBookmark = createElement(
      'img',
      ['bookmark-gallery--image'],
      'assets/icon-bookmark-empty.svg'
    );
    galleryItemBookmarkContainer.append(galleryItemBookmark);

    const galleryInfo = createElement('div', ['gallery__info']);
    const galleryInfoTop = createElement('div', ['gallery__info-top']);
    const galleryInfoYear = createElement('p', ['text'], '2019');
    const galleryInfoMediaIcon = createElement(
      'img',
      ['icon', 'icon--media'],
      sections[index].title ? mediaMovieIcon : mediaTvIcon
    );

    const galleryInfoMedia = createElement('p', ['text'], media);
    const galleryItemTitle = createElement(
      'h3',
      ['title', 'title--gallery'],
      sections[index].title ? sections[index].title : sections[index].name
    );
    galleryInfo.append(galleryInfoTop);
    galleryInfoTop.append(
      galleryInfoYear,
      galleryInfoMediaIcon,
      galleryInfoMedia
    );
    galleryItem.append(
      galleryImage,
      galleryItemBookmarkContainer,
      galleryInfo,
      galleryItemTitle
    );
    gallery.append(galleryItem);
  }
  sectionLanding.append(sectionLandingTop, gallery);
  fragmentSection.append(sectionLanding);
  landingMoviesContainer.append(fragmentSection);
};

export { createGallerySections, landingShow };
