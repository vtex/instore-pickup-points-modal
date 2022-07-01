# InStore Pickup Points Modal

> A React component that renders VTEX's instore pickup points modal

## Setup

```sh
$ npm install @vtex/instore-pickup-points-modal
```

## API

### Base Component

* [PickupPointsModal](#PickupPointsModal)

---

## Base Component

### PickupPointsModal

This component renders the modal with a list of pickup points and a map with markers

#### Props

* **`closePickupPointsModal`**: Callback function to be called when PickupPointsModal is closed
* **`changeActiveSLAOption`**: Callback function to be called when a pickup is selected
* **`changeActivePickupDetails`**: Callback function to be called when PickupPointDetails state is changed
* **`googleMapsKey`**: The Google Maps API Key
* **`items`**: Items array from `orderForm` to get the products information
* **`isPickupDetailsActive`**: (default: `false`) If the PickupPointDetails is active and should be rendered
* **`logisticsInfo`**: LogisticsInfo array from `orderForm` to get sla information
* **`onAddressChange`**: Callback function to be called when a the search field has changed
* **`pickupOptions`**: Array of pickup points (SLAs of type `pickup-in-point`)
* **`searchAddress`**: The current address used for the search input in the shape of [`AddressShapeWithValidation`](https://github.com/vtex/address-form/blob/master/src/propTypes/AddressShapeWithValidation.js)
* **`selectedPickupPoint`**: Current selected SLA of type `pickup-in-point`
* **`rules`**: The selected country rules from [`AddressForm`](https://github.com/vtex/address-form/tree/master/src/country)
* **`sellerId`**: The Id of the seller when the list of pickups is filtered by seller
* **`storePreferencesData`**: Object from `orderForm` to get currency preferences from store

```js
PickupPointsModal.propTypes = {
  activePickupPoint: PropTypes.object,
  askForGeolocation: PropTypes.bool,
  askForGeolocationStatus: PropTypes.string,
  changeActivePickupDetails: PropTypes.func.isRequired,
  changeActiveSLAOption: PropTypes.func.isRequired,
  closePickupPointsModal: PropTypes.func.isRequired,
  googleMaps: PropTypes.object,
  googleMapsKey: PropTypes.string.isRequired,
  intl: intlShape,
  isSearching: PropTypes.bool,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  logisticsInfo: PropTypes.array.isRequired,
  onAddressChange: PropTypes.func.isRequired,
  pickupOptions: PropTypes.array.isRequired,
  pickupPoints: PropTypes.array.isRequired,
  rules: PropTypes.object,
  searchAddress: AddressShapeWithValidation,
  selectedPickupPoint: PropTypes.object,
  sellerId: PropTypes.string,
  storePreferencesData: PropTypes.object.isRequired,
}
```

#### Example

```js
<PickupPointsModal
  activePickupPoint={activePickupPoint}
  askForGeolocation={false}
  closePickupPointsModal={onClosePickupPointsModal}
  changeActivePickupDetails={handleChangeActivePickupDetails}
  changeActiveSLAOption={handleChangeActiveSLAOption}
  googleMapsKey={googleMapsApiKey}
  intl={intl}
  isPickupDetailsActive
  items={items}
  logisticsInfo={logisticsInfo}
  pickupOptions={pickupOptions}
  pickupPoints={pickupPoints}
  availablePickupPoints={availablePickupPoints}
  onAddressChange={noop}
  rules={countryRule}
  searchAddress={searchAddress}
  selectedPickupPoint={activePickupPoint}
  storePreferencesData={storePreferencesData}
/>
```
