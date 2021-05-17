import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { why_we as whyWe } from '../../assets/data.json';

const WhyWe = ({ id }) => (
  <div id={id} class="flex flex-column w-100 pt3 tc mt5">
    <p class="w-80 w-60-l center f3 f2-l fw6 pc-red ttu tracked-l mt5-l ph3">
      {whyWe.title}
    </p>

    <div class="w-90 w-60-l flex flex-column flex-row-l center mt3 mt4-l">
      <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div class="flex flex-column items-center">
          <img src="images/svg_earth.svg" alt="" class="pt4" />
          <p class="pt4 f4 fw6 pc-red">{whyWe.col_1.title}</p>
        </div>
        <p class="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {whyWe.col_1.content}
        </p>
      </div>

      <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div class="flex flex-column items-center">
          <img src="images/svg_pc.svg" alt="" class="pt4" />
          <p class="pt4 f4 fw6 pc-red">{whyWe.col_2.title}</p>
        </div>

        <p class="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {whyWe.col_2.content}
        </p>
      </div>

      <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div class="flex flex-column items-center">
          <img src="images/svg_notebook.svg" alt="" class="pt4" />
          <p class="pt4 f4 fw6 pc-red">{whyWe.col_3.title}</p>
        </div>
        <p class="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {whyWe.col_3.content}
        </p>
      </div>
    </div>
  </div>
);

export default WhyWe;