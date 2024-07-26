import './ccbaDetail.scss';
import { Data } from './DataCCBA.jsx';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
export const CCBADetail = () => {
  return (
    <>
      <img className="banners" src={Data.imgBanners} alt="Img-banners" />
      <section className="box-1-data-ccba">
        <div className="row-1">
          <div className="row-1-left">
            <div className="content">
              <h1>Giới thiệu chung</h1>
              <div>{Data.introduction}</div>
              <div className="btn">
                <a href="#courseDetail" id="btn-courseDetail">
                  Khung chương trình{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="row-1-right">
            <img src={Data.imgIntroduction} />
          </div>
        </div>
      </section>
      <section className="box-2-data-ccba">
        <div className="row-2">
          <div className="row-2-left">
            <div className="content">
              <h1>Đối tượng tham gia</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants2}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-2-right">
            <div className="content">
              <h1>Học xong làm ở đâu</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork3}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork4}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork5}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork6}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="box-3-data-ccba">
        <div>
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4-data-ccba">
        <div className="row-4">
          <div className="row-4-left">
            <img src={Data.imgBox4} alt="Image-box-4" />
          </div>
          <div className="row-4-right">
            <h1>Giá trị nhận được sau khóa học</h1>
            <div>
              <ul>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row1}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row2}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row3}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row4}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row5}
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section id="courseDetail" className="box-5-data-ccba">
        <h1 id="box-5-title">Khung chương trình</h1>
        {/* MODULE 1 */}
        <div>
          <div className="node">Module 1</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-1">
            <div className="left">
              <p className="module-title">{Data.module1_title}</p>
              <ul>
                <li>{Data.module1_row1}</li>
                <li>{Data.module1_row2}</li>
                <li>{Data.module1_row3}</li>
                <li>{Data.module1_row4}</li>
                <li>{Data.module1_row5}</li>
                <li>{Data.module1_row6}</li>
                <li>{Data.module1_row7}</li>
                <li>{Data.module1_row8}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module1_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 2 */}
        <div>
          <div className="node">Module 2</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-2">
            <div className="left">
              <img src={Data.module2_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module2_title}</p>
              <ul>
                <li>{Data.module2_row1}</li>
                <li>{Data.module2_row2}</li>
                <li>{Data.module2_row3}</li>
                <li>{Data.module2_row4}</li>
                <li>{Data.module2_row5}</li>
                <li>{Data.module2_row6}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 3 */}
        <div>
          <div className="node">Module 3</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-3">
            <div className="left">
              <p className="module-title">{Data.module3_title}</p>
              <ul>
                <li>{Data.module3_row1}</li>
                <li>{Data.module3_row2}</li>
                <li>{Data.module3_row3}</li>
                <li>{Data.module3_row4}</li>
                <li>{Data.module3_row5}</li>
                <li>{Data.module3_row6}</li>
                <li>{Data.module3_row7}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module3_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 4 */}
        <div>
          <div className="node">Module 4</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-4">
            <div className="left">
              <img src={Data.module4_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module4_title}</p>
              <ul>
                <li>{Data.module4_row1}</li>
                <li>{Data.module4_row2}</li>
                <li>{Data.module4_row3}</li>
                <li>{Data.module4_row4}</li>
                <li>{Data.module4_row5}</li>
                <li>{Data.module4_row6}</li>
                <li>{Data.module4_row7}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 5 */}
        <div>
          <div className="node">Module 5</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-5">
            <div className="left">
              <p className="module-title">{Data.module5_title}</p>
              <ul>
                <li>{Data.module5_row1}</li>
                <li>{Data.module5_row2}</li>
                <li>{Data.module5_row3}</li>
                <li>{Data.module5_row4}</li>
                <li>{Data.module5_row5}</li>
                <li>{Data.module5_row6}</li>
                <li>{Data.module5_row7}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module5_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 6 */}
        <div>
          <div className="node">Module 6</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-6">
            <div className="left">
              <img src={Data.module6_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module6_title}</p>
              <ul>
                <li>{Data.module6_row1}</li>
                <li>{Data.module6_row2}</li>
                <li>{Data.module6_row3}</li>
                <li>{Data.module6_row4}</li>
                <li>{Data.module6_row5}</li>
                <li>{Data.module6_row6}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 7 */}
        <div>
          <div className="node">Module 7</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-7">
            <div className="left">
              <p className="module-title">{Data.module7_title}</p>
              <ul>
                <li>{Data.module7_row1}</li>
                <li>{Data.module7_row2}</li>
                <li>{Data.module7_row3}</li>
                <li>{Data.module7_row4}</li>
                <li>{Data.module7_row5}</li>
                <li>{Data.module7_row6}</li>
                <li>{Data.module7_row7}</li>
                <li>{Data.module7_row8}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module7_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 8 */}
        <div>
          <div className="node">Module 8</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-8">
            <div className="left">
              <img src={Data.module8_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module8_title}</p>
              <ul>
                <li>{Data.module8_row1}</li>
                <li>{Data.module8_row2}</li>
                <li>{Data.module8_row3}</li>
                <li>{Data.module8_row4}</li>
                <li>{Data.module8_row5}</li>
                <li>{Data.module8_row6}</li>
                <li>{Data.module8_row7}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 9 */}
        <div>
          <div className="node">Module 9</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-9">
            <div className="left">
              <p className="module-title">{Data.module9_title}</p>
              <ul>
                <li>{Data.module9_row1}</li>
                <li>{Data.module9_row2}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module9_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 10 */}
        <div>
          <div className="node">Module 10</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-10">
            <div className="left">
              <img src={Data.module10_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module10_title}</p>
              <ul>
                <li>{Data.module10_row1}</li>
                <li>{Data.module10_row2}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 11 */}
        <div>
          <div className="node">Module 11</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-11">
            <div className="left">
              <p className="module-title">{Data.module11_title}</p>
              <ul>
                <li>{Data.module11_row1}</li>
                <li>{Data.module11_row2}</li>
                <li>{Data.module11_row3}</li>
                <li>{Data.module11_row4}</li>
                <li>{Data.module11_row5}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module11_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
