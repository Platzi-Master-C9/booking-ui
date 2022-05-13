import React from 'react';
import { shallow } from 'enzyme';
import { MapMarker } from '../../src/components/SearchResultsMap/MapMarker/index.js';
import { MarkerCard } from '../../src/components/SearchResultsMap/MarkerCard';
import { CardRating } from '../../src/components/SearchResultsMap/MarkerCard/CardRating';
import { CardTitle } from '../../src/components/SearchResultsMap/MarkerCard/CardTitle';
import { CardPrice } from '../../src/components/SearchResultsMap/MarkerCard/CardPrice';
import { SearchResultsMap } from '../../src/components/SearchResultsMap';
import { PlacesMock } from '../../__mocks__/PlacesMock';

describe('<MapCard />', () => {
  const card = shallow(<MarkerCard place={PlacesMock[0]} />);
  it("should show the place's name", () => {
    expect(card.find(CardTitle).shallow().find('p').at(1).text()).toBe(
      PlacesMock[0].title
    );
  });

  it("should show place's price", () => {
    expect(card.find(CardPrice).shallow().find('p').first().text()).toBe(
      `$${PlacesMock[0].price} MXN`
    );
  });

  it("should show places's rating", () => {
    expect(card.find(CardRating).shallow().find('p').first().text()).toBe(
      PlacesMock[0].rating.toString()
    );
  });

  it("should show place's reviews", () => {
    expect(card.find(CardRating).shallow().find('p').last().text()).toEqual(
      PlacesMock[0].reviews.toString()
    );
  });

  it("should show place's type", () => {
    expect(card.find(CardTitle).shallow().find('p').first().text()).toBe(
      PlacesMock[0].type
    );
  });
});

describe('<MapMarker />', () => {
  const marker = shallow(
    <MapMarker text={PlacesMock[0].price} place={PlacesMock[0]} />
  );

  it('should show the price value', () => {
    expect(marker.find('p').first().text()).toBe(
      PlacesMock[0].price.toString()
    );
  });

  it("should not show place card if there's no click", () => {
    expect(marker.exists(MarkerCard)).toBeFalsy();
  });

  it('should show place card given a user click', () => {
    marker.find('div').simulate('click');
    expect(marker.exists(MarkerCard)).toBeTruthy();
  });
});

describe('<SearchResultsMap />', () => {
  const map = shallow(<SearchResultsMap initPlaces={PlacesMock} />);

  it('should display 7 markers', () => {
    expect(map.find(MapMarker)).toHaveLength(7);
  });
});
