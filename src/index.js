// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const ORIENTATION = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
};

function getWindowOrientation() {
  const { width, height } = Dimensions.get('window');
  return height >= width ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
}
function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState(
    getWindowOrientation,
  );

  useEffect(() => {
    function updateState() {
      setDeviceOrientation(getWindowOrientation());
    }
    Dimensions.addEventListener('change', updateState);
    return () => Dimensions.removeEventListener('change', updateState);
  }, []);

  return deviceOrientation;
}

export default useDeviceOrientation;
