import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                // 마우스 오른쪽 클린
                onContextMenu={(e) => {
                  e.preventDefault(); //마우스 오른쪽 버튼 눌러도 메뉴 안뜨게
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
export default SelectColors;
