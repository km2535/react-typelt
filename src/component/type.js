import TypeIt from "typeit-react";
import React from 'react';

export default () => {
  // 함키화 시키고 함수인자를 컴포넌트에 넘겨주면 체이닝을 이용할 수 있다.
  // 그러나 리엑트 18버전에서는 호환이 되지 않는 듯 하다. 
 const getBeforeInit=(instance) => {
   //리엑트는 className을 사용하지만 체이닝을 통한 class는 그냥 class이용
    instance.options({lifeLike: false,nextStringDelay: 1000,loop: true})
            .pause(2000)
            .delete(34)
            .pause(1000)
            .type("<span class='span2'>  but using React version of 17, you can tasty it</span>");

    // Remember to return it!
    return instance;}
    return (
        <div className="App">
            <TypeIt getBeforeInit={getBeforeInit}>
            This library is very cool!
              <span className="span"> but not support React version 18!
                </span>
              </TypeIt>
        </div>
    );
};