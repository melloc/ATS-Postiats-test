/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-9:  0h:14m
**
*/

/* ATSextcode_beg() */
// COMMENT_line

var
thePlays = $("#play").asEventStream("click")
var
theNexts = $("#next").asEventStream("click")
var
thePauses = $("#pause").asEventStream("click")
// COMMENT_line

var
thePulses = Bacon.interval(200, 0)
// COMMENT_line

var thePrimes = 0
// COMMENT_line

/* ATSextcode_end() */

// ATSassume(_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_type)

// ATSassume(_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_type)

// ATSassume(_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__color_type)

var statmp0

var statmp64

var statmp65

var statmp66

var statmp67

var statmp172

var statmp173

var statmp215

var statmp217

var statmp219

var statmp220

var statmp221

var statmp222

function
__patsfun_0__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_0(arg0); }];
}


function
__patsfun_39__closurerize(env0, env1, env2, env3, env4)
{
  return [function(cenv) { return __patsfun_39(cenv[1], cenv[2], cenv[3], cenv[4], cenv[5]); }, env0, env1, env2, env3, env4];
}


function
__patsfun_40__closurerize(env0, env1, env2, env3, env4)
{
  return [function(cenv) { return __patsfun_40(cenv[1], cenv[2], cenv[3], cenv[4], cenv[5]); }, env0, env1, env2, env3, env4];
}


function
__patsfun_42__closurerize(env0, env1, env2, env3)
{
  return [function(cenv) { return __patsfun_42(cenv[1], cenv[2], cenv[3], cenv[4]); }, env0, env1, env2, env3];
}


function
__patsfun_44__closurerize()
{
  return [function(cenv) { return __patsfun_44(); }];
}


function
__patsfun_45__closurerize()
{
  return [function(cenv) { return __patsfun_45(); }];
}


function
__patsfun_46__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_46(arg0); }];
}


function
__patsfun_47__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_47(arg0); }];
}


function
__patsfun_48__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_48(arg0); }];
}


function
__patsfun_0(arg0)
{
//
// knd = 0
  var tmp3
//
  // __patsflab___patsfun_0
  tmp3 = ats2jspre_JSmath_random();
  ats2jspre_arrayref_set_at(statmp0, arg0, tmp3);
  return/*_void*/;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(arg0, arg1)
{
//
// knd = 0
  var tmpret4
//
  // __patsflab_point_make_xy
  tmpret4 = [arg0, arg1];
  return tmpret4;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg0)
{
//
// knd = 0
  var tmpret5
//
  // __patsflab_point_get_x
  tmpret5 = arg0[0];
  return tmpret5;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg0)
{
//
// knd = 0
  var tmpret6
//
  // __patsflab_point_get_y
  tmpret6 = arg0[1];
  return tmpret6;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(arg0, arg1)
{
//
// knd = 0
  var tmpret7
//
  // __patsflab_vector_make_xy
  tmpret7 = [arg0, arg1];
  return tmpret7;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg0)
{
//
// knd = 0
  var tmpret8
//
  // __patsflab_vector_get_x
  tmpret8 = arg0[0];
  return tmpret8;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg0)
{
//
// knd = 0
  var tmpret9
//
  // __patsflab_vector_get_y
  tmpret9 = arg0[1];
  return tmpret9;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_pvp(arg0, arg1)
{
//
// knd = 0
  var tmpret10
  var tmp11
  var tmp12
  var tmp13
  var tmp14
  var tmp15
  var tmp16
//
  // __patsflab_add_pvp
  tmp12 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg0);
  tmp13 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg1);
  tmp11 = ats2jspre_add_double_double(tmp12, tmp13);
  tmp15 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg0);
  tmp16 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg1);
  tmp14 = ats2jspre_add_double_double(tmp15, tmp16);
  tmpret10 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(tmp11, tmp14);
  return tmpret10;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_ppv(arg0, arg1)
{
//
// knd = 0
  var tmpret17
  var tmp18
  var tmp19
  var tmp20
  var tmp21
  var tmp22
  var tmp23
//
  // __patsflab_sub_ppv
  tmp19 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg0);
  tmp20 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg1);
  tmp18 = ats2jspre_sub_double_double(tmp19, tmp20);
  tmp22 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg0);
  tmp23 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg1);
  tmp21 = ats2jspre_sub_double_double(tmp22, tmp23);
  tmpret17 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(tmp18, tmp21);
  return tmpret17;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_vvv(arg0, arg1)
{
//
// knd = 0
  var tmpret24
  var tmp25
  var tmp26
  var tmp27
  var tmp28
  var tmp29
  var tmp30
//
  // __patsflab_add_vvv
  tmp26 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg0);
  tmp27 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg1);
  tmp25 = ats2jspre_add_double_double(tmp26, tmp27);
  tmp29 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg0);
  tmp30 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg1);
  tmp28 = ats2jspre_add_double_double(tmp29, tmp30);
  tmpret24 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(tmp25, tmp28);
  return tmpret24;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_vvv(arg0, arg1)
{
//
// knd = 0
  var tmpret31
  var tmp32
  var tmp33
  var tmp34
  var tmp35
  var tmp36
  var tmp37
//
  // __patsflab_sub_vvv
  tmp33 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg0);
  tmp34 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg1);
  tmp32 = ats2jspre_sub_double_double(tmp33, tmp34);
  tmp36 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg0);
  tmp37 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg1);
  tmp35 = ats2jspre_sub_double_double(tmp36, tmp37);
  tmpret31 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(tmp32, tmp35);
  return tmpret31;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mul_kvv(arg0, arg1)
{
//
// knd = 0
  var tmpret38
  var tmp39
  var tmp40
  var tmp41
  var tmp42
//
  // __patsflab_mul_kvv
  tmp40 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg1);
  tmp39 = ats2jspre_mul_double_double(arg0, tmp40);
  tmp42 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg1);
  tmp41 = ats2jspre_mul_double_double(arg0, tmp42);
  tmpret38 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(tmp39, tmp41);
  return tmpret38;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__div_vkv(arg0, arg1)
{
//
// knd = 0
  var tmpret43
  var tmp44
  var tmp45
  var tmp46
  var tmp47
//
  // __patsflab_div_vkv
  tmp45 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_x(arg0);
  tmp44 = ats2jspre_div_double_double(tmp45, arg1);
  tmp47 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_get_y(arg0);
  tmp46 = ats2jspre_div_double_double(tmp47, arg1);
  tmpret43 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__vector_make_xy(tmp44, tmp46);
  return tmpret43;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__color_make_rgb(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret48
//
  // __patsflab_color_make_rgb
  tmpret48 = [arg0, arg1, arg2];
  return tmpret48;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__color_get_r(arg0)
{
//
// knd = 0
  var tmpret49
//
  // __patsflab_color_get_r
  tmpret49 = arg0[0];
  return tmpret49;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__color_get_g(arg0)
{
//
// knd = 0
  var tmpret50
//
  // __patsflab_color_get_g
  tmpret50 = arg0[1];
  return tmpret50;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__color_get_b(arg0)
{
//
// knd = 0
  var tmpret51
//
  // __patsflab_color_get_b
  tmpret51 = arg0[2];
  return tmpret51;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP1_get()
{
//
// knd = 0
  var tmpret68
//
  // __patsflab_theP1_get
  tmpret68 = ats2jspre_ref_get_elt(statmp64);
  return tmpret68;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP2_get()
{
//
// knd = 0
  var tmpret69
//
  // __patsflab_theP2_get
  tmpret69 = ats2jspre_ref_get_elt(statmp65);
  return tmpret69;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP3_get()
{
//
// knd = 0
  var tmpret70
//
  // __patsflab_theP3_get
  tmpret70 = ats2jspre_ref_get_elt(statmp66);
  return tmpret70;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP4_get()
{
//
// knd = 0
  var tmpret71
//
  // __patsflab_theP4_get
  tmpret71 = ats2jspre_ref_get_elt(statmp67);
  return tmpret71;
} // end-of-function


function
theP1_set(arg0, arg1)
{
//
// knd = 0
  var tmp73
//
  // __patsflab_theP1_set
  tmp73 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(arg0, arg1);
  ats2jspre_ref_set_elt(statmp64, tmp73);
  return/*_void*/;
} // end-of-function


function
theP2_set(arg0, arg1)
{
//
// knd = 0
  var tmp75
//
  // __patsflab_theP2_set
  tmp75 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(arg0, arg1);
  ats2jspre_ref_set_elt(statmp65, tmp75);
  return/*_void*/;
} // end-of-function


function
theP3_set(arg0, arg1)
{
//
// knd = 0
  var tmp77
//
  // __patsflab_theP3_set
  tmp77 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(arg0, arg1);
  ats2jspre_ref_set_elt(statmp66, tmp77);
  return/*_void*/;
} // end-of-function


function
theP4_set(arg0, arg1)
{
//
// knd = 0
  var tmp79
//
  // __patsflab_theP4_set
  tmp79 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_make_xy(arg0, arg1);
  ats2jspre_ref_set_elt(statmp67, tmp79);
  return/*_void*/;
} // end-of-function


function
draw_theArray(arg0)
{
//
// knd = 0
  var tmp81
  var tmp82
  var tmp83
  var tmp84
//
  // __patsflab_draw_theArray
  tmp81 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP1_get();
  tmp82 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP2_get();
  tmp83 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP3_get();
  tmp84 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__theP4_get();
  theCtx2d_clear();
  _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mydraw_bargraph__17__1(arg0, 128, tmp81, tmp82, tmp83, tmp84);
  return/*_void*/;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mydraw_bargraph__17__1(env0, arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 0
  var tmp53__1
  var tmp54__1
  var tmp55__1
  var tmp56__1
  var tmp57__1
//
  // __patsflab_mydraw_bargraph
  tmp53__1 = ats2jspre_div_double_int(1.0, arg0);
  tmp55__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_ppv(arg2, arg1);
  tmp54__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mul_kvv(tmp53__1, tmp55__1);
  tmp57__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_ppv(arg3, arg4);
  tmp56__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mul_kvv(tmp53__1, tmp57__1);
  loop_18__18__1(arg0, tmp54__1, tmp56__1, env0, 0, arg1, arg4);
  return/*_void*/;
} // end-of-function


function
loop_18__18__1(env0, env1, env2, env3, arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp59__1
  var tmp60__1
  var tmp62__1
  var tmp63__1
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop_18
    tmp59__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_pvp(arg1, env1);
    tmp60__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_pvp(arg2, env2);
    _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mydraw_bargraph__fcell__28__1(env3, arg0, arg1, tmp59__1, tmp60__1, arg2);
    tmp62__1 = ats2jspre_add_int1_int1(arg0, 1);
    tmp63__1 = ats2jspre_lt_int1_int1(tmp62__1, env0);
    if(tmp63__1) {
      // ATStailcalseq_beg
      apy0 = tmp62__1;
      apy1 = tmp59__1;
      apy2 = tmp60__1;
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      funlab_js = 1; // __patsflab_loop_18
      // ATStailcalseq_end
    } else {
      // ATSINSmove_void
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mydraw_bargraph__fcell__28__1(env0, arg0, arg1, arg2, arg3, arg4)
{
//
// knd = 0
  var tmp86__1
  var tmp87__1
  var tmp88__1
  var tmp89__1
  var tmp90__1
  var tmp91__1
  var tmp92__1
  var tmp93__1
  var tmp94__1
  var tmp95__1
  var tmp97__1
  var tmp98__1
  var tmp99__1
  var tmp100__1
  var tmp101__1
  var tmp102__1
  var tmp105__1
  var tmp106__1
  var tmp108__1
  var tmp109__1
  var tmp111__1
  var tmp112__1
  var tmp114__1
  var tmp115__1
//
  // __patsflab_mydraw_bargraph__fcell
  tmp86__1 = ats2jspre_arrayref_get_at(statmp0, arg0);
  tmp89__1 = ats2jspre_mul_double_int(tmp86__1, 192);
  tmp88__1 = ats2jspre_JSmath_floor(tmp89__1);
  tmp87__1 = ats2jspre_String(tmp88__1);
  tmp95__1 = ats2jspre_string_append("rgb(", tmp87__1);
  tmp94__1 = ats2jspre_string_append(tmp95__1, ",");
  tmp93__1 = ats2jspre_string_append(tmp94__1, tmp87__1);
  tmp92__1 = ats2jspre_string_append(tmp93__1, ",");
  tmp91__1 = ats2jspre_string_append(tmp92__1, tmp87__1);
  tmp90__1 = ats2jspre_string_append(tmp91__1, ")");
  ats2js_HTML5_canvas2d_set_fillStyle_string(env0, tmp90__1);
  tmp99__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_ppv(arg3, arg2);
  tmp98__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mul_kvv(tmp86__1, tmp99__1);
  tmp97__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_pvp(arg2, tmp98__1);
  tmp102__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__sub_ppv(arg4, arg1);
  tmp101__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__mul_kvv(tmp86__1, tmp102__1);
  tmp100__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__add_pvp(arg1, tmp101__1);
  ats2js_HTML5_canvas2d_beginPath(env0);
  tmp105__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg1);
  tmp106__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg1);
  ats2js_HTML5_canvas2d_moveTo(env0, tmp105__1, tmp106__1);
  tmp108__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(arg2);
  tmp109__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(arg2);
  ats2js_HTML5_canvas2d_lineTo(env0, tmp108__1, tmp109__1);
  tmp111__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(tmp97__1);
  tmp112__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(tmp97__1);
  ats2js_HTML5_canvas2d_lineTo(env0, tmp111__1, tmp112__1);
  tmp114__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_x(tmp100__1);
  tmp115__1 = _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__point_get_y(tmp100__1);
  ats2js_HTML5_canvas2d_lineTo(env0, tmp114__1, tmp115__1);
  ats2js_HTML5_canvas2d_closePath(env0);
  ats2js_HTML5_canvas2d_fill(env0);
  return/*_void*/;
} // end-of-function


function
rotate_right_32(arg0, arg1)
{
//
// knd = 0
  var tmp168
//
  // __patsflab_rotate_right_32
  tmp168 = ats2jspre_arrayref_get_at(statmp0, arg1);
  loop_33(arg1, statmp0, tmp168, arg0);
  return/*_void*/;
} // end-of-function


function
loop_33(env0, env1, arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmp164
  var tmp165
  var tmp167
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop_33
    tmp164 = ats2jspre_lt_int1_int1(arg1, env0);
    if(tmp164) {
      tmp165 = ats2jspre_arrayref_get_at(env1, arg1);
      ats2jspre_arrayref_set_at(env1, arg1, arg0);
      tmp167 = ats2jspre_add_int1_int1(arg1, 1);
      // ATStailcalseq_beg
      apy0 = tmp165;
      apy1 = tmp167;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab_loop_33
      // ATStailcalseq_end
    } else {
      ats2jspre_arrayref_set_at(env1, env0, arg0);
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
incr_34(arg0)
{
//
// knd = 0
  var tmp170
  var tmp171
//
  // __patsflab_incr_34
  tmp171 = ats2jspre_ref_get_elt(arg0);
  tmp170 = ats2jspre_add_int0_int0(tmp171, 1);
  ats2jspre_ref_set_elt(arg0, tmp170);
  return/*_void*/;
} // end-of-function


function
theContinuation_save(arg0)
{
//
// knd = 0
  var tmp175
  var tmp176
//
  // __patsflab_theContinuation_save
  tmp175 = ats2jspre_ref_get_elt(statmp172);
  tmp176 = [arg0, tmp175];
  ats2jspre_ref_set_elt(statmp172, tmp176);
  return/*_void*/;
} // end-of-function


function
theContinuation_exec()
{
//
// knd = 0
  var tmp178
  var tmp180
//
  // __patsflab_theContinuation_exec
  tmp178 = ats2jspre_ref_get_elt(statmp172);
  tmp180 = null;
  ats2jspre_ref_set_elt(statmp172, tmp180);
  loop_37(tmp178);
  return/*_void*/;
} // end-of-function


function
loop_37(arg0)
{
//
// knd = 1
  var apy0
  var tmp182
  var tmp183
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop_37
    // ATScaseofseq_beg
    tmplab_js = 1;
    while(true) {
      tmplab = tmplab_js; tmplab_js = 0;
      switch(tmplab) {
        // ATSbranchseq_beg
        case 1: // __atstmplab0
        if(ATSCKptriscons(arg0)) { tmplab_js = 4; break; }
        case 2: // __atstmplab1
        // ATSINSmove_void
        break;
        // ATSbranchseq_end
        // ATSbranchseq_beg
        case 3: // __atstmplab2
        case 4: // __atstmplab3
        tmp182 = arg0[0];
        tmp183 = arg0[1];
        tmp182[0](tmp182);
        // ATStailcalseq_beg
        apy0 = tmp183;
        arg0 = apy0;
        funlab_js = 1; // __patsflab_loop_37
        // ATStailcalseq_end
        break;
        // ATSbranchseq_end
      } // end-of-switch
      if (tmplab_js === 0) break;
    } // endwhile
    // ATScaseofseq_end
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmsort2(arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmp186
  var tmp187
  var tmp188
  var tmp189
  var tmp190
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_kmsort2
    tmp186 = ats2jspre_sub_int1_int1(arg1, arg0);
    tmp187 = ats2jspre_gte_int1_int1(tmp186, 2);
    if(tmp187) {
      tmp188 = ats2jspre_half_int1(tmp186);
      tmp189 = ats2jspre_add_int1_int1(arg0, tmp188);
      tmp190 = ats2jspre_ref(0);
      _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmsort2(arg0, tmp189, __patsfun_39__closurerize(arg0, arg1, arg2, tmp189, tmp190));
      // ATStailcalseq_beg
      apy0 = tmp189;
      apy1 = arg1;
      apy2 = __patsfun_40__closurerize(arg0, arg1, arg2, tmp189, tmp190);
      arg0 = apy0;
      arg1 = apy1;
      arg2 = apy2;
      funlab_js = 1; // __patsflab_kmsort2
      // ATStailcalseq_end
    } else {
      arg2[0](arg2);
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
__patsfun_39(env0, env1, env2, env3, env4)
{
//
// knd = 0
  var tmp194
  var tmp195
//
  // __patsflab___patsfun_39
  incr_34(env4);
  tmp195 = ats2jspre_ref_get_elt(env4);
  tmp194 = ats2jspre_gte_int0_int0(tmp195, 2);
  if(tmp194) {
    _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmerge2(env0, env3, env1, env2);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
__patsfun_40(env0, env1, env2, env3, env4)
{
//
// knd = 0
  var tmp198
  var tmp199
//
  // __patsflab___patsfun_40
  incr_34(env4);
  tmp199 = ats2jspre_ref_get_elt(env4);
  tmp198 = ats2jspre_gte_int0_int0(tmp199, 2);
  if(tmp198) {
    _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmerge2(env0, env3, env1, env2);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmerge2(arg0, arg1, arg2, arg3)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var apy3
  var tmp201
  var tmp202
  var tmp203
  var tmp204
  var tmp205
  var tmp206
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_kmerge2
    tmp201 = ats2jspre_eq_int1_int1(arg0, arg1);
    if(tmp201) {
      arg3[0](arg3);
    } else {
      tmp202 = ats2jspre_eq_int1_int1(arg1, arg2);
      if(tmp202) {
        arg3[0](arg3);
      } else {
        tmp203 = ats2jspre_arrayref_get_at(statmp0, arg0);
        tmp204 = ats2jspre_arrayref_get_at(statmp0, arg1);
        tmp205 = ats2jspre_lte_double_double(tmp203, tmp204);
        if(tmp205) {
          tmp206 = ats2jspre_add_int1_int1(arg0, 1);
          // ATStailcalseq_beg
          apy0 = tmp206;
          apy1 = arg1;
          apy2 = arg2;
          apy3 = arg3;
          arg0 = apy0;
          arg1 = apy1;
          arg2 = apy2;
          arg3 = apy3;
          funlab_js = 1; // __patsflab_kmerge2
          // ATStailcalseq_end
        } else {
          rotate_right_32(arg0, arg1);
          draw_update();
          theContinuation_save(__patsfun_42__closurerize(arg0, arg1, arg2, arg3));
        } // endif
      } // endif
    } // endif
    if (funlab_js > 0) continue; else return/*_void*/;
  } // endwhile-fun
} // end-of-function


function
__patsfun_42(env0, env1, env2, env3)
{
//
// knd = 0
  var tmp210
  var tmp211
//
  // __patsflab___patsfun_42
  tmp210 = ats2jspre_add_int1_int1(env0, 1);
  tmp211 = ats2jspre_add_int1_int1(env1, 1);
  _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmerge2(tmp210, tmp211, env2, env3);
  return/*_void*/;
} // end-of-function


function
mergesort()
{
//
// knd = 0
//
  // __patsflab_mergesort
  theContinuation_save(__patsfun_44__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_44()
{
//
// knd = 0
//
  // __patsflab___patsfun_44
  _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__kmsort2(0, 128, __patsfun_45__closurerize());
  return/*_void*/;
} // end-of-function


function
__patsfun_45()
{
//
// knd = 0
//
  // __patsflab___patsfun_45
  ats2jspre_alert("Sorting is done!");
  return/*_void*/;
} // end-of-function


function
__patsfun_46(arg0)
{
//
// knd = 0
  var tmpret216
//
  // __patsflab___patsfun_46
  tmpret216 = true;
  return tmpret216;
} // end-of-function


function
__patsfun_47(arg0)
{
//
// knd = 0
  var tmpret218
//
  // __patsflab___patsfun_47
  tmpret218 = false;
  return tmpret218;
} // end-of-function


function
__patsfun_48(arg0)
{
//
// knd = 0
//
  // __patsflab___patsfun_48
  theContinuation_exec();
  return/*_void*/;
} // end-of-function

// dynloadflag_init
var _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynloadflag = 0;

function
_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynload()
{
//
// knd = 0
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynloadflag(362))
  if(ATSCKiseqz(_057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynloadflag)) {
    _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynloadflag = 1 ; // flag is set
    statmp0 = ats2jspre_arrayref_make_elt(128, 0.0);
    ats2jspre_arrayref_foreach_cloref(statmp0, 128, __patsfun_0__closurerize());
    statmp64 = ats2jspre_ref(0);
    statmp65 = ats2jspre_ref(0);
    statmp66 = ats2jspre_ref(0);
    statmp67 = ats2jspre_ref(0);
    statmp173 = null;
    statmp172 = ats2jspre_ref(statmp173);
    statmp215 = ats2js_bacon_EStream_map(thePlays, __patsfun_46__closurerize());
    statmp217 = ats2js_bacon_EStream_map(thePauses, __patsfun_47__closurerize());
    statmp219 = ats2js_bacon_EStream_merge2(statmp215, statmp217);
    statmp220 = ats2js_bacon_EStream_toProperty_init(statmp219, false);
    statmp221 = ats2js_bacon_EStream_filter_property(thePulses, statmp220);
    statmp222 = ats2js_bacon_EStream_merge2(theNexts, statmp221);
    ats2js_bacon_EStream_subscribe(statmp222, __patsfun_48__closurerize());
  } // endif
  return/*_void*/;
} // end-of-function


function
my_dynload()
{
//
// knd = 0
//
  _057_cs_055_pub_057_www_055_dir_057_faculty_057_hwxi_057_academic_057_courses_057_CS520_057_Spring15_057_code_057_lecture_055_04_055_08_057_Bacon_056_js_057_mergesort_057_mergesort2_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
// COMMENT_line

my_dynload();
// COMMENT_line

var
canvas =
document.getElementById
(
  "Patsoptaas-Evaluate-canvas"
);
// COMMENT_line

var
ctx2d = canvas.getContext('2d');
// COMMENT_line

function
theCtx2d_get() { return ctx2d; }
// COMMENT_line

function
theCtx2d_clear ()
{
  return ctx2d.clearRect(0, 0, canvas.width, canvas.height);
}
// COMMENT_line

function
initize()
{
// COMMENT_line

var w = canvas.width
var h = canvas.height
var w2 = 0.88 * w
var h2 = 0.88 * h
// COMMENT_line

theP1_set(0, h2); theP2_set(w2, h2); theP3_set(w2, 0); theP4_set(0, 0);
// COMMENT_line

return;
}
// COMMENT_line

function
draw_main()
{
// COMMENT_line

initize();
draw_update(ctx2d);
// COMMENT_line

} // COMMENT_line

// COMMENT_line

function
draw_update()
{
// COMMENT_line

var w =
  canvas.width
var h =
  canvas.height
var w2 = 0.88 * w
var h2 = 0.88 * h
// COMMENT_line

ctx2d.save();
ctx2d.translate
(
  (w-w2)/2, (h-h2)/2
) ; // COMMENT_line

draw_theArray(ctx2d);
ctx2d.restore();
// COMMENT_line

}
// COMMENT_line

jQuery(document).ready(function(){draw_main();mergesort();return;});
// COMMENT_line

/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */
