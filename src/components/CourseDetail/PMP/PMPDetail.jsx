import './pmpDetail.scss';
import { PMPData } from './PMPData.jsx';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
export const PMPDetail = () => {
  return (
    <>
      <img className="banners" src={PMPData.imgBanners} alt="Img-banners" />
      <section className="box-1">
        <div className="row-1">
          <div className="row-1-left">
            <div className="content">
              <h1>Giới thiệu chung</h1>
              <div>{PMPData.introduction}</div>
              <div className="btn">
                <a href="#courseDetail" id="btn-courseDetail">
                  Khung chương trình{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="row-1-right">
            <img src={PMPData.imgIntroduction} />
          </div>
        </div>
      </section>
      <section className="box-2">
        <div className="row-2">
          <div className="row-2-left">
            <div className="content">
              <h1>Đối tượng tham gia</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{PMPData.participants1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{PMPData.participants2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />
                  <p>{PMPData.participants3}</p>
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
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{PMPData.wheredowork1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{PMPData.wheredowork2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />
                  <p>{PMPData.wheredowork3}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />
                  <p>{PMPData.wheredowork4}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="box-3">
        <div > 
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4">
        <div className="row-4">
          <div className="row-4-left">
            <img src={PMPData.imgBox4} alt="Image-box-4" />
          </div>
          <div className="row-4-right">
            <h1>Giá trị nhận được sau khóa học</h1>
            <div>
              <ul>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row1}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row2}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row3}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row4}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row5}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row6}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={PMPData.iconLogo}
                    alt="img err"
                  />{' '}
                  {PMPData.box4_row7}
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section id="courseDetail" className="box-5">
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
              <div className="day"> Day 1</div>
              <p className="module-title">{PMPData.module1_title}</p>
              <ul>
                <li>{PMPData.module1_row1}</li>
                <li>{PMPData.module1_row2}</li>
                <li>{PMPData.module1_row3}</li>
                <li>{PMPData.module1_row4}</li>
                <li>{PMPData.module1_row5}</li>
                <li>{PMPData.module1_row6}</li>
              </ul>
            </div>
            <div className="right">
              <img src={PMPData.module1_img} alt="Image-box-5" />
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
              <img src={PMPData.module2_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <div className="day"> Day 2</div>
              <p className="module-title">{PMPData.module2_title}</p>
              <ul>
                <li>{PMPData.module2_row1}</li>
                <li>{PMPData.module2_row2}</li>
                <li>{PMPData.module2_row3}</li>
                <li>{PMPData.module2_row4}</li>
                <li>{PMPData.module2_row5}</li>
                <li>{PMPData.module2_row6}</li>
                <li>{PMPData.module2_row7}</li>
              </ul>
              <p className="module-title">{PMPData.module2_row8}</p>
              <p className="module-title">{PMPData.module2_row9}</p>
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
              <div className="day"> Day 3</div>
              <p className="module-title">{PMPData.module3_title}</p>
              <ul>
                <li>{PMPData.module3_row1}</li>
              </ul>
              <p className="module-title">{PMPData.module3_row2_title}</p>
              <ul>
                <li>{PMPData.module3_row3}</li>
                <li>{PMPData.module3_row4}</li>
                <li>{PMPData.module3_row5}</li>
                <li>{PMPData.module3_row6}</li>
                <li>{PMPData.module3_row7}</li>
                <li>{PMPData.module3_row8}</li>
                <li>{PMPData.module3_row9}</li>
                <li>{PMPData.module3_row10}</li>
                <li>{PMPData.module3_row11}</li>
                <li>{PMPData.module3_row12}</li>
              </ul>
              <p className="module-title">{PMPData.module3_row13_title}</p>
              <ul>
                <li>{PMPData.module3_row14}</li>
                <li>{PMPData.module3_row15}</li>
                <li>{PMPData.module3_row16}</li>
              </ul>
              <p className="module-title">{PMPData.module3_row17_title}</p>
            </div>
            <div className="right">
              <img src={PMPData.module3_img} alt="Image-box-5" />
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
              <img src={PMPData.module4_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <div className="day"> Day 4</div>
              <p className="module-title">{PMPData.module4_title}</p>
              <ul>
                <li>{PMPData.module4_row1}</li>
                <li>{PMPData.module4_row2}</li>
                <li>{PMPData.module4_row3}</li>
                <li>{PMPData.module4_row4}</li>
                <li>{PMPData.module4_row5}</li>
                <li>{PMPData.module4_row6}</li>
                <li>{PMPData.module4_row7}</li>
                <li>{PMPData.module4_row8}</li>
              </ul>
              <p className="module-title">{PMPData.module4_row9_title}</p>
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
              <div className="day"> Day 5</div>
              <p className="module-title">{PMPData.module5_title}</p>
              <ul>
                <li>{PMPData.module5_row1}</li>
                <li>{PMPData.module5_row2}</li>
                <li>{PMPData.module5_row3}</li>
                <li>{PMPData.module5_row4}</li>
                <li>{PMPData.module5_row5}</li>
                <li>{PMPData.module5_row6}</li>
                <li>{PMPData.module5_row7}</li>
                <li>{PMPData.module5_row8}</li>
                <li>{PMPData.module5_row9}</li>
              </ul>
              <p className="module-title">{PMPData.module5_row10_title}</p>
            </div>
            <div className="right">
              <img src={PMPData.module5_img} alt="Image-box-5" />
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
              <img src={PMPData.module6_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <div className="day"> Day 6</div>
              <p className="module-title">{PMPData.module6_title}</p>
              <ul>
                <li>{PMPData.module6_row1}</li>
                <li>{PMPData.module6_row2}</li>
                <li>{PMPData.module6_row3}</li>
                <li>{PMPData.module6_row4}</li>
                <li>{PMPData.module6_row5}</li>
              </ul>
              <p className="module-title">{PMPData.module6_row6_title}</p>
            </div>
          </div>
        </div>
        {/* MODULE 7 */}
        <div>
          <div className="node">Module 7</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-7">
            <div className="left">
              <div className="day"> Day 7</div>
              <p className="module-title">{PMPData.module7_title}</p>
              <ul>
                <li>{PMPData.module7_row1}</li>
                <li>{PMPData.module7_row2}</li>
              </ul>
              <p className="module-title">{PMPData.module7_row3_title}</p>
            </div>
            <div className="right">
              <img src={PMPData.module7_img} alt="Image-box-5" />
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
              <img src={PMPData.module8_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <div className="day"> Day 8</div>
              <p className="module-title">{PMPData.module8_title}</p>
              <ul>
                <li>{PMPData.module8_row1}</li>
                <li>{PMPData.module8_row2}</li>
              </ul>
              <p className="module-title">{PMPData.module8_row3_title}</p>
            </div>
          </div>
        </div>
        {/* MODULE 9 */}
        <div>
          <div className="node">Module 9</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-9">
            <div className="left">
              <div className="day"> Day 9+10+11</div>
              <p className="module-title">{PMPData.module9_title}</p>
              <ul>
                <li>{PMPData.module9_row1}</li>
                <li>{PMPData.module9_row2}</li>
              </ul>
            </div>
            <div className="right">
              <img src={PMPData.module7_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
