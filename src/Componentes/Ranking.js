import React from "react";

const Ranking = () => {
  return (
    <div className="ranking">
      <h1>
        영화 랭킹임: 
        <div className="roller">
          <span className="rolltext">
            {/* 하드코딩 */}
            1. 육사오(6/45)<br/>
            2. 헌트<br/>
            3. 공조2: 인터네셔날<br/>
            4. 한산: 용의출현<br/>
            5. 놉<br/>
            6. 탑건: 매버릭<br/>
            7. 리미트<br/>
            8. 블랙폰<br/>
            9. 불릿 트레인<br/>
            10. 비상선언<br/>
          </span>
        </div>
      </h1>
    </div>
  )
}

export default Ranking;