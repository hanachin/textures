import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Form, Field, FormSpy } from 'react-final-form';
import csstree from 'css-tree';
import horizontalBorder from './textures/horizontalBorder';
import verticalBorder from './textures/verticalBorder';
import rightDiagonalLine from './textures/rightDiagonalLine';
import leftDiagonalLine from './textures/leftDiagonalLine';
import check from './textures/check';
import diagonalCheck from './textures/diagonalCheck'
import ichimatsu from './textures/ichimatsu'
import uroko from './textures/uroko'
import diamond from './textures/diamond'
import diamond2 from './textures/diamond2';
import arrowUp from './textures/arrowUp';
import arrowDown from './textures/arrowDown';
import arrow from './textures/arrow';
import arrow2 from './textures/arrow2';
import arrow3 from './textures/arrow3';
import arrow3Rev from './textures/arrow3Rev';
import arrow4 from './textures/arrow4';
import arrow4Rev from './textures/arrow4Rev';
import arrow5 from './textures/arrow5';
import arrow5Rev from './textures/arrow5Rev';
import yagasuri from './textures/yagasuri';
import yagasuriRev from './textures/yagasuriRev';
import japan from './textures/japan';
import circle from './textures/circle';
import circles from './textures/circles';
import baumkuchen from './textures/baumkuchen';
import polkaDot from './textures/polkaDot';
import shippou from './textures/shippou';
import shippou2 from './textures/shippou2';
import scalelike from './textures/scalelike';
import scalelike2 from './textures/scalelike2';
import scalelike3 from './textures/scalelike3';
import halfCircles from './textures/halfCircles';
import halfCircles2 from './textures/halfCircles2';
import seigaiha from './textures/seigaiha';
import wave from './textures/wave';
import flower from './textures/flower';
import prism from './textures/prism';
import weed from './textures/weed';
import flowerBlock from './textures/flowerBlock';

type CssCustomProperty = { property: string; value: string; cssValue: csstree.Value };
type CssCustomProperties = Array<CssCustomProperty>;

const cssCustomPropertyDeclarations = (css: string) => {
  const declarations: csstree.Declaration[] = [];
  const ast = csstree.parse(css, { context: 'declarationList', parseValue: true, parseCustomProperty: true })
  csstree.walk(ast, (node) => {
    if (node.type === 'Declaration' && node.property.startsWith('--') && node.value.type === 'Value' && !declarations.find(({ property: p }) => p === node.property)) {
      declarations.push(node);
    }
  })
  return declarations
}

const cssCustomProperties = (css: string, elt: HTMLDivElement): CssCustomProperties => {
  const declarations = cssCustomPropertyDeclarations(css);
  const properties: CssCustomProperties = [];
  const styles = getComputedStyle(elt);
  declarations.forEach(({ property }) => {
    const value = styles.getPropertyValue(property);
    const ast = csstree.parse(value, { context: 'value' });
      csstree.walk(ast, cssValue => {
        if (cssValue.type === 'Value') {
          properties.push({ property, value, cssValue });
        }
      })
  })
  return properties;
}

const generateTheme = (properties: CssCustomProperties, values: { [property: string]: string | undefined }) => {
  return Object.keys(values).map(property => {
    const cssProperty = properties.find(({ property: p }) => p === property);
    if (!cssProperty) return '';

    const newValue = values[property];
    if (!newValue) return '';

    const { cssValue } = cssProperty;
    const head = cssValue.children.first();
    switch (head?.type) {
      case 'Dimension':
        return `${property}: ${newValue}${head.unit};`;
      case 'HexColor':
        if (head.value.length === 8) {
          const alpha = values[`__alpha__${property}`] ?? '';
          const alphaHex = (+alpha).toString(16);
          return `${property}: ${newValue + alphaHex};`;
        } else {
          return `${property}: ${newValue};`;
        }
    }
    return `${property}: ${newValue};`;
  }).join("\n");
}

const defaultTheme = `
--sqrt2: 1.41421356237;
--sqrt3: 1.73205080757;

--arrow-block-size: 16px;
--arrow-space:      4px;
--size: 16px;
--width-primary:   16px;
--width-secondary: 16px;

--accent-color: #ecdf2b;
--primary-color: #f20000;
--secondary-color: #ffffff;
`;

const ExampleBase = styled.div<{ css?: string }>`
  width: 256px;
  height: 256px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  ${ ({ css }) => css }
`;

const ThemeEditorBase = styled.div`
  overflow: auto;
  font-size: xx-large;
  height: 100%;
  background: #66666666;
`;

const CssValueField: React.FC<CssCustomProperty> = ({ property, value, cssValue }) => {
  const head = cssValue.children.first();
  switch (head?.type) {
    case 'Dimension':
      return <Field name={property} component="input" type="range" initialValue={head.value} min="0" max={2 * +head.value} />
    case 'HexColor':
      if (head.value.length === 8) {
        const alpha = parseInt(head.value.substr(6, 2), 16);
        return <>
          <Field name={property} component="input" type="color" initialValue={`#${head.value.substr(0, 6)}`} />
          <Field name={`__alpha__${property}`} component="input" type="range" initialValue={alpha} min="0" max="255" />
        </>
      } else {
        return <Field name={property} component="input" type="color" initialValue={`#${head.value}`} />
      }
    default:
      return (
        <Field name={property} component="input" type="text" initialValue={value} />
      )
  }
}

const ThemeEditor: React.FC<{theme: string; onResetTheme: () => void; onChangeTheme: (theme: string) => void}> = ({ theme, onResetTheme, onChangeTheme }) => {
  const [properties, setProperties] = useState<CssCustomProperties>([]);
  const editorRef = useRef<HTMLDivElement>(null);
  const originalTheme = useRef<string>('');
  useEffect(() => { originalTheme.current = theme });
  useEffect(() => {
    if (!editorRef.current) return;

    setProperties(cssCustomProperties(originalTheme.current, editorRef.current));
  }, [originalTheme, editorRef])
  return (
    <ThemeEditorBase ref={editorRef}>
      <Form onSubmit={async () => { }} render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            {properties.map(({ property, value, cssValue }) => (<div key={property}>
              <label>{property}</label><br/>
              <CssValueField property={property} value={value} cssValue={cssValue} />
            </div>))}
            <button onClick={(e) => { onResetTheme();  e.preventDefault() } }>Reset</button>
          </form>
          <FormSpy
            subscription={{ values: true, pristine: true }}
            onChange={({ values, pristine }) => {
              if (!editorRef.current) return;
              if (pristine) return;
              const newTheme = generateTheme(properties, values);
              onChangeTheme(newTheme);
            }}
          />
        </>
      )} />
    </ThemeEditorBase>
  )
}

const Example: React.FC<{ texture: { pattern: string, theme?: string } }> = ({ texture: { pattern, theme: defaultTheme } }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(defaultTheme || '');
  return (
    <ExampleBase css={pattern + theme} onMouseOver={() => !edit && setEdit(true)} onMouseLeave={() => setEdit(false)}>
      {
        edit ? (
          <>
            <ThemeEditor theme={theme} onResetTheme={() => window.confirm('リセット') && setTheme(defaultTheme || '')} onChangeTheme={newTheme => { setTheme(newTheme) }} />
          </>
        ) : null
      }
    </ExampleBase>
  )
}

const Header = styled.header`
  text-align: center;
  width: 100vw;
  height: 6rem;
  font-size: 4rem;
  & > a, & > a:visited {
    color: var(--primary-color);
    text-decoration: none;
  }
  & > a:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }
`;

const Gallary = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-template-rows: repeat(auto-fill, 256px);
  grid-gap: 8px;
  padding: 8px;
`;

const AppRoot = styled.div`
  ${ () => defaultTheme }
  box-sizing: border-box;
  background: #dcdddd;
  margin-bottom: 1rem;
`;

const App = () => {
  return (
    <AppRoot>
      <Header>
        <a href="https://github.com/hanachin/textures">hanachin/textures</a>
      </Header>
      <Gallary>
        <Example texture={horizontalBorder}/>
        <Example texture={verticalBorder}/>
        <Example texture={rightDiagonalLine}/>
        <Example texture={leftDiagonalLine}/>
        <Example texture={check}/>
        <Example texture={diagonalCheck}/>
        <Example texture={ichimatsu}/>
        <Example texture={uroko}/>
        <Example texture={diamond}/>
        <Example texture={diamond2}/>
        <Example texture={arrowUp}/>
        <Example texture={arrowDown}/>
        <Example texture={arrow}/>
        <Example texture={arrow2}/>
        <Example texture={arrow3}/>
        <Example texture={arrow3Rev}/>
        <Example texture={arrow4}/>
        <Example texture={arrow4Rev}/>
        <Example texture={arrow5}/>
        <Example texture={arrow5Rev}/>
        <Example texture={yagasuri}/>
        <Example texture={yagasuriRev}/>
        <Example texture={japan}/>
        <Example texture={circle}/>
        <Example texture={circles}/>
        <Example texture={baumkuchen}/>
        <Example texture={polkaDot}/>
        <Example texture={shippou}/>
        <Example texture={shippou2}/>
        <Example texture={scalelike}/>
        <Example texture={scalelike2}/>
        <Example texture={scalelike3}/>
        <Example texture={halfCircles}/>
        <Example texture={halfCircles2}/>
        <Example texture={seigaiha}/>
        <Example texture={wave}/>
        <Example texture={flower}/>
        <Example texture={prism}/>
        <Example texture={weed}/>
        <Example texture={flowerBlock}/>
      </Gallary>
    </AppRoot>
  );
}

export default App;
