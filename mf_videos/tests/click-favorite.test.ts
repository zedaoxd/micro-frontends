/**
 * @jest-environment jsdom
 */

import setupClickHandlers from "./../src/events/clickHandlers";

describe("setupClickHandlers", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <div class="card-video">
        <span class="pulse">
          <span style="--i: 0"></span>
          <span style="--i: 1"></span>
          <span style="--i: 2"></span>
          <span style="--i: 3"></span>
          <span style="--i: 4"></span>
          <span style="--i: 5"></span>
          <span style="--i: 6"></span>
          <span style="--i: 7"></span>
          <span style="--i: 8"></span>
          <span style="--i: 9"></span>
          <span style="--i: 10"></span>
        </span>
    
        <div class="card-video-thumb-container" data-card-video-id="{{ id }}">
          <img src="{{ thumbnail }}" alt="{{ title }}" class="card-video__img" />
    
          <div class="modal-container">{{ modal-wtach-video }}</div>
        </div>
    
        <div class="card-video__content">
          <h2 class="card-video__title" title="{{ title }}">{{ title }}</h2>
    
          <button>
            <img
              src="{{ iconFavorite }}"
              alt="icon"
              data-video-favorite-id="{{ id }}"
            />
          </button>
        </div>
      </div>
    </div>
    `;
  });

  it("should call toogleFavoriteVideoService when clicking on favorite icon", () => {
    // Arrange
    const allCards = document.querySelectorAll("[data-video-favorite-id]");
    const toogleFavoriteVideoServiceSpy = jest.fn();
    const event = new Event("click");
    const target = document.createElement("img");
    target.setAttribute("data-video-favorite-id", "video1");
    target.setAttribute("src", "iconFavorite");
    target.setAttribute("alt", "icon");
    target.addEventListener("click", toogleFavoriteVideoServiceSpy);

    // Act
    setupClickHandlers();
    target.dispatchEvent(event);

    // Assert
    expect(toogleFavoriteVideoServiceSpy).toHaveBeenCalled();
  });
});
