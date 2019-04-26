// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Assets
import nodes from './nodes.png';
import cluster from './cluster.png';
import volumes from './volumes.png';
import containers from './containers.png';
import pods from './pods.png';
import deployments from './deployments.png';
import ingress from './ingress.png';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    secondary: '#23007B',
    primary: '#050412',
    white: '#F7F7F7',
    darkgray: '#1F2022',
    lightgray: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary" style={{background: 'linear-gradient(135deg, #050412, #23007B'}}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intro a <Text textColor="white">Kubernetes</Text>
          </Heading>
          <Text textSize={14} textColor="gray">&#40;Abreviado K8s pa' la raza&#41;</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit textColor="white" caps>
            ¿Qué es Kubernetes?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <BlockQuote>
            <Quote textSize={36} textColor="white">Es un sistema de código abierto para automatizar la implementación, el escalado y la administración de aplicaciones en contenedores.</Quote>
            <Cite>kubernetes.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="white" caps>
            Hardware
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Nodos
          </Heading>
          <Image fit src={nodes} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Cluster
          </Heading>
          <Image fit src={cluster} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Volumenes Persistentes
          </Heading>
          <Image fit src={volumes} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="white" caps>
            Software
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Containeres
          </Heading>
          <Image fit src={containers} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Pods
          </Heading>
          <Image fit src={pods} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Deployments
          </Heading>
          <Image fit src={deployments} height='70%' width='70%' />
        </Slide>
        <Slide transition={['fade']} bgColor="white">
          <Heading size={6} textColor="primary">
            Ingress
          </Heading>
          <Image fit src={ingress} height='70%' width='70%' />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Hands on
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
