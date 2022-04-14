import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { what_startup_say as whatStartupSay } from '../../assets/data.json';

const WhatStartupSay = ({ id }) => (
  // dangerouslySetInnerHTML={{ __html: item.answer }}
  <>
    <div id={id} className="flex flex-column w-100 pt4 tc mt4">
      <p className="w-80 w-60-l center f3 f2-l fw7 pc-red ttu tracked-l mt5-l ph3">
        {whatStartupSay.title}
      </p>

      <div className="w-90 w-70-l flex flex-column flex-row-l center mt3 mt4-l">
        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_pc.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_earth.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.desc }}
            />
          </div>

          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_notebook.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.content }}
          />
        </div>
      </div>
    </div>
  </>
);

export default WhatStartupSay;
