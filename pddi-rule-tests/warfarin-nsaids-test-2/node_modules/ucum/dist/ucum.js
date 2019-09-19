(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "10*": {
    "value": 10,
    "ucum": "1"
  },
  "10^": {
    "value": 10,
    "ucum": "1"
  },
  "[pi]": {
    "value": 3.141592653589793,
    "ucum": "1"
  },
  "%": {
    "value": 1,
    "ucum": "10*-2"
  },
  "[ppth]": {
    "value": 1,
    "ucum": "10*-3"
  },
  "[ppm]": {
    "value": 1,
    "ucum": "10*-6"
  },
  "[ppb]": {
    "value": 1,
    "ucum": "10*-9"
  },
  "[pptr]": {
    "value": 1,
    "ucum": "10*-12"
  },
  "mol": {
    "value": 6.0221367,
    "ucum": "10*23"
  },
  "sr": {
    "value": 1,
    "ucum": "rad2"
  },
  "Hz": {
    "value": 1,
    "ucum": "s-1"
  },
  "N": {
    "value": 1,
    "ucum": "kg.m/s2"
  },
  "Pa": {
    "value": 1,
    "ucum": "N/m2"
  },
  "J": {
    "value": 1,
    "ucum": "N.m"
  },
  "W": {
    "value": 1,
    "ucum": "J/s"
  },
  "A": {
    "value": 1,
    "ucum": "C/s"
  },
  "V": {
    "value": 1,
    "ucum": "J/C"
  },
  "F": {
    "value": 1,
    "ucum": "C/V"
  },
  "Ohm": {
    "value": 1,
    "ucum": "V/A"
  },
  "S": {
    "value": 1,
    "ucum": "Ohm-1"
  },
  "Wb": {
    "value": 1,
    "ucum": "V.s"
  },
  "Cel": {
    "value": null,
    "ucum": "cel(1 K)"
  },
  "T": {
    "value": 1,
    "ucum": "Wb/m2"
  },
  "H": {
    "value": 1,
    "ucum": "Wb/A"
  },
  "lm": {
    "value": 1,
    "ucum": "cd.sr"
  },
  "lx": {
    "value": 1,
    "ucum": "lm/m2"
  },
  "Bq": {
    "value": 1,
    "ucum": "s-1"
  },
  "Gy": {
    "value": 1,
    "ucum": "J/kg"
  },
  "Sv": {
    "value": 1,
    "ucum": "J/kg"
  },
  "gon": {
    "value": 0.9,
    "ucum": "deg"
  },
  "deg": {
    "value": 2,
    "ucum": "[pi].rad/360"
  },
  "'": {
    "value": 1,
    "ucum": "deg/60"
  },
  "''": {
    "value": 1,
    "ucum": "'/60"
  },
  "l": {
    "value": 1,
    "ucum": "dm3"
  },
  "L": {
    "value": 1,
    "ucum": "l"
  },
  "ar": {
    "value": 100,
    "ucum": "m2"
  },
  "min": {
    "value": 60,
    "ucum": "s"
  },
  "h": {
    "value": 60,
    "ucum": "min"
  },
  "d": {
    "value": 24,
    "ucum": "h"
  },
  "a_t": {
    "value": 365.24219,
    "ucum": "d"
  },
  "a_j": {
    "value": 365.25,
    "ucum": "d"
  },
  "a_g": {
    "value": 365.2425,
    "ucum": "d"
  },
  "a": {
    "value": 1,
    "ucum": "a_j"
  },
  "wk": {
    "value": 7,
    "ucum": "d"
  },
  "mo_s": {
    "value": 29.53059,
    "ucum": "d"
  },
  "mo_j": {
    "value": 1,
    "ucum": "a_j/12"
  },
  "mo_g": {
    "value": 1,
    "ucum": "a_g/12"
  },
  "mo": {
    "value": 1,
    "ucum": "mo_j"
  },
  "t": {
    "value": 1000,
    "ucum": "kg"
  },
  "bar": {
    "value": 100000,
    "ucum": "Pa"
  },
  "u": {
    "value": 1.6605402e-24,
    "ucum": "g"
  },
  "eV": {
    "value": 1,
    "ucum": "[e].V"
  },
  "AU": {
    "value": 149597.870691,
    "ucum": "Mm"
  },
  "pc": {
    "value": 30856780000000000,
    "ucum": "m"
  },
  "[c]": {
    "value": 299792458,
    "ucum": "m/s"
  },
  "[h]": {
    "value": 6.6260755e-24,
    "ucum": "J.s"
  },
  "[k]": {
    "value": 1.380658e-23,
    "ucum": "J/K"
  },
  "[eps_0]": {
    "value": 8.854187817e-12,
    "ucum": "F/m"
  },
  "[mu_0]": {
    "value": 1,
    "ucum": "4.[pi].10*-7.N/A2"
  },
  "[e]": {
    "value": 1.60217733e-19,
    "ucum": "C"
  },
  "[m_e]": {
    "value": 9.1093897e-28,
    "ucum": "g"
  },
  "[m_p]": {
    "value": 1.6726231e-24,
    "ucum": "g"
  },
  "[G]": {
    "value": 6.67259e-11,
    "ucum": "m3.kg-1.s-2"
  },
  "[g]": {
    "value": 9.80665,
    "ucum": "m/s2"
  },
  "atm": {
    "value": 101325,
    "ucum": "Pa"
  },
  "[ly]": {
    "value": 1,
    "ucum": "[c].a_j"
  },
  "gf": {
    "value": 1,
    "ucum": "g.[g]"
  },
  "[lbf_av]": {
    "value": 1,
    "ucum": "[lb_av].[g]"
  },
  "Ky": {
    "value": 1,
    "ucum": "cm-1"
  },
  "Gal": {
    "value": 1,
    "ucum": "cm/s2"
  },
  "dyn": {
    "value": 1,
    "ucum": "g.cm/s2"
  },
  "erg": {
    "value": 1,
    "ucum": "dyn.cm"
  },
  "P": {
    "value": 1,
    "ucum": "dyn.s/cm2"
  },
  "Bi": {
    "value": 10,
    "ucum": "A"
  },
  "St": {
    "value": 1,
    "ucum": "cm2/s"
  },
  "Mx": {
    "value": 1e-8,
    "ucum": "Wb"
  },
  "G": {
    "value": 0.0001,
    "ucum": "T"
  },
  "Oe": {
    "value": 250,
    "ucum": "/[pi].A/m"
  },
  "Gb": {
    "value": 1,
    "ucum": "Oe.cm"
  },
  "sb": {
    "value": 1,
    "ucum": "cd/cm2"
  },
  "Lmb": {
    "value": 1,
    "ucum": "cd/cm2/[pi]"
  },
  "ph": {
    "value": 0.0001,
    "ucum": "lx"
  },
  "Ci": {
    "value": 37000000000,
    "ucum": "Bq"
  },
  "R": {
    "value": 0.000258,
    "ucum": "C/kg"
  },
  "RAD": {
    "value": 100,
    "ucum": "erg/g"
  },
  "REM": {
    "value": 1,
    "ucum": "RAD"
  },
  "[in_i]": {
    "value": 2.54,
    "ucum": "cm"
  },
  "[ft_i]": {
    "value": 12,
    "ucum": "[in_i]"
  },
  "[yd_i]": {
    "value": 3,
    "ucum": "[ft_i]"
  },
  "[mi_i]": {
    "value": 5280,
    "ucum": "[ft_i]"
  },
  "[fth_i]": {
    "value": 6,
    "ucum": "[ft_i]"
  },
  "[nmi_i]": {
    "value": 1852,
    "ucum": "m"
  },
  "[kn_i]": {
    "value": 1,
    "ucum": "[nmi_i]/h"
  },
  "[sin_i]": {
    "value": 1,
    "ucum": "[in_i]2"
  },
  "[sft_i]": {
    "value": 1,
    "ucum": "[ft_i]2"
  },
  "[syd_i]": {
    "value": 1,
    "ucum": "[yd_i]2"
  },
  "[cin_i]": {
    "value": 1,
    "ucum": "[in_i]3"
  },
  "[cft_i]": {
    "value": 1,
    "ucum": "[ft_i]3"
  },
  "[cyd_i]": {
    "value": 1,
    "ucum": "[yd_i]3"
  },
  "[bf_i]": {
    "value": 144,
    "ucum": "[in_i]3"
  },
  "[cr_i]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[mil_i]": {
    "value": 0.001,
    "ucum": "[in_i]"
  },
  "[cml_i]": {
    "value": 1,
    "ucum": "[pi]/4.[mil_i]2"
  },
  "[hd_i]": {
    "value": 4,
    "ucum": "[in_i]"
  },
  "[ft_us]": {
    "value": 1200,
    "ucum": "m/3937"
  },
  "[yd_us]": {
    "value": 3,
    "ucum": "[ft_us]"
  },
  "[in_us]": {
    "value": 1,
    "ucum": "[ft_us]/12"
  },
  "[rd_us]": {
    "value": 16.5,
    "ucum": "[ft_us]"
  },
  "[ch_us]": {
    "value": 4,
    "ucum": "[rd_us]"
  },
  "[lk_us]": {
    "value": 1,
    "ucum": "[ch_us]/100"
  },
  "[rch_us]": {
    "value": 100,
    "ucum": "[ft_us]"
  },
  "[rlk_us]": {
    "value": 1,
    "ucum": "[rch_us]/100"
  },
  "[fth_us]": {
    "value": 6,
    "ucum": "[ft_us]"
  },
  "[fur_us]": {
    "value": 40,
    "ucum": "[rd_us]"
  },
  "[mi_us]": {
    "value": 8,
    "ucum": "[fur_us]"
  },
  "[acr_us]": {
    "value": 160,
    "ucum": "[rd_us]2"
  },
  "[srd_us]": {
    "value": 1,
    "ucum": "[rd_us]2"
  },
  "[smi_us]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[sct]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[twp]": {
    "value": 36,
    "ucum": "[sct]"
  },
  "[mil_us]": {
    "value": 0.001,
    "ucum": "[in_us]"
  },
  "[in_br]": {
    "value": 2.539998,
    "ucum": "cm"
  },
  "[ft_br]": {
    "value": 12,
    "ucum": "[in_br]"
  },
  "[rd_br]": {
    "value": 16.5,
    "ucum": "[ft_br]"
  },
  "[ch_br]": {
    "value": 4,
    "ucum": "[rd_br]"
  },
  "[lk_br]": {
    "value": 1,
    "ucum": "[ch_br]/100"
  },
  "[fth_br]": {
    "value": 6,
    "ucum": "[ft_br]"
  },
  "[pc_br]": {
    "value": 2.5,
    "ucum": "[ft_br]"
  },
  "[yd_br]": {
    "value": 3,
    "ucum": "[ft_br]"
  },
  "[mi_br]": {
    "value": 5280,
    "ucum": "[ft_br]"
  },
  "[nmi_br]": {
    "value": 6080,
    "ucum": "[ft_br]"
  },
  "[kn_br]": {
    "value": 1,
    "ucum": "[nmi_br]/h"
  },
  "[acr_br]": {
    "value": 4840,
    "ucum": "[yd_br]2"
  },
  "[gal_us]": {
    "value": 231,
    "ucum": "[in_i]3"
  },
  "[bbl_us]": {
    "value": 42,
    "ucum": "[gal_us]"
  },
  "[qt_us]": {
    "value": 1,
    "ucum": "[gal_us]/4"
  },
  "[pt_us]": {
    "value": 1,
    "ucum": "[qt_us]/2"
  },
  "[gil_us]": {
    "value": 1,
    "ucum": "[pt_us]/4"
  },
  "[foz_us]": {
    "value": 1,
    "ucum": "[gil_us]/4"
  },
  "[fdr_us]": {
    "value": 1,
    "ucum": "[foz_us]/8"
  },
  "[min_us]": {
    "value": 1,
    "ucum": "[fdr_us]/60"
  },
  "[crd_us]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[bu_us]": {
    "value": 2150.42,
    "ucum": "[in_i]3"
  },
  "[gal_wi]": {
    "value": 1,
    "ucum": "[bu_us]/8"
  },
  "[pk_us]": {
    "value": 1,
    "ucum": "[bu_us]/4"
  },
  "[dqt_us]": {
    "value": 1,
    "ucum": "[pk_us]/8"
  },
  "[dpt_us]": {
    "value": 1,
    "ucum": "[dqt_us]/2"
  },
  "[tbs_us]": {
    "value": 1,
    "ucum": "[foz_us]/2"
  },
  "[tsp_us]": {
    "value": 1,
    "ucum": "[tbs_us]/3"
  },
  "[cup_us]": {
    "value": 16,
    "ucum": "[tbs_us]"
  },
  "[foz_m]": {
    "value": 30,
    "ucum": "mL"
  },
  "[cup_m]": {
    "value": 240,
    "ucum": "mL"
  },
  "[tsp_m]": {
    "value": 5,
    "ucum": "mL"
  },
  "[tbs_m]": {
    "value": 15,
    "ucum": "mL"
  },
  "[gal_br]": {
    "value": 4.54609,
    "ucum": "l"
  },
  "[pk_br]": {
    "value": 2,
    "ucum": "[gal_br]"
  },
  "[bu_br]": {
    "value": 4,
    "ucum": "[pk_br]"
  },
  "[qt_br]": {
    "value": 1,
    "ucum": "[gal_br]/4"
  },
  "[pt_br]": {
    "value": 1,
    "ucum": "[qt_br]/2"
  },
  "[gil_br]": {
    "value": 1,
    "ucum": "[pt_br]/4"
  },
  "[foz_br]": {
    "value": 1,
    "ucum": "[gil_br]/5"
  },
  "[fdr_br]": {
    "value": 1,
    "ucum": "[foz_br]/8"
  },
  "[min_br]": {
    "value": 1,
    "ucum": "[fdr_br]/60"
  },
  "[gr]": {
    "value": 64.79891,
    "ucum": "mg"
  },
  "[lb_av]": {
    "value": 7000,
    "ucum": "[gr]"
  },
  "[oz_av]": {
    "value": 1,
    "ucum": "[lb_av]/16"
  },
  "[dr_av]": {
    "value": 1,
    "ucum": "[oz_av]/16"
  },
  "[scwt_av]": {
    "value": 100,
    "ucum": "[lb_av]"
  },
  "[lcwt_av]": {
    "value": 112,
    "ucum": "[lb_av]"
  },
  "[ston_av]": {
    "value": 20,
    "ucum": "[scwt_av]"
  },
  "[lton_av]": {
    "value": 20,
    "ucum": "[lcwt_av]"
  },
  "[stone_av]": {
    "value": 14,
    "ucum": "[lb_av]"
  },
  "[pwt_tr]": {
    "value": 24,
    "ucum": "[gr]"
  },
  "[oz_tr]": {
    "value": 20,
    "ucum": "[pwt_tr]"
  },
  "[lb_tr]": {
    "value": 12,
    "ucum": "[oz_tr]"
  },
  "[sc_ap]": {
    "value": 20,
    "ucum": "[gr]"
  },
  "[dr_ap]": {
    "value": 3,
    "ucum": "[sc_ap]"
  },
  "[oz_ap]": {
    "value": 8,
    "ucum": "[dr_ap]"
  },
  "[lb_ap]": {
    "value": 12,
    "ucum": "[oz_ap]"
  },
  "[oz_m]": {
    "value": 28,
    "ucum": "g"
  },
  "[lne]": {
    "value": 1,
    "ucum": "[in_i]/12"
  },
  "[pnt]": {
    "value": 1,
    "ucum": "[lne]/6"
  },
  "[pca]": {
    "value": 12,
    "ucum": "[pnt]"
  },
  "[pnt_pr]": {
    "value": 0.013837,
    "ucum": "[in_i]"
  },
  "[pca_pr]": {
    "value": 12,
    "ucum": "[pnt_pr]"
  },
  "[pied]": {
    "value": 32.48,
    "ucum": "cm"
  },
  "[pouce]": {
    "value": 1,
    "ucum": "[pied]/12"
  },
  "[ligne]": {
    "value": 1,
    "ucum": "[pouce]/12"
  },
  "[didot]": {
    "value": 1,
    "ucum": "[ligne]/6"
  },
  "[cicero]": {
    "value": 12,
    "ucum": "[didot]"
  },
  "[degF]": {
    "value": null,
    "ucum": "degf(5 K/9)"
  },
  "[degR]": {
    "value": 5,
    "ucum": "K/9"
  },
  "cal_[15]": {
    "value": 4.1858,
    "ucum": "J"
  },
  "cal_[20]": {
    "value": 4.1819,
    "ucum": "J"
  },
  "cal_m": {
    "value": 4.19002,
    "ucum": "J"
  },
  "cal_IT": {
    "value": 4.1868,
    "ucum": "J"
  },
  "cal_th": {
    "value": 4.184,
    "ucum": "J"
  },
  "cal": {
    "value": 1,
    "ucum": "cal_th"
  },
  "[Cal]": {
    "value": 1,
    "ucum": "kcal_th"
  },
  "[Btu_39]": {
    "value": 1.05967,
    "ucum": "kJ"
  },
  "[Btu_59]": {
    "value": 1.0548,
    "ucum": "kJ"
  },
  "[Btu_60]": {
    "value": 1.05468,
    "ucum": "kJ"
  },
  "[Btu_m]": {
    "value": 1.05587,
    "ucum": "kJ"
  },
  "[Btu_IT]": {
    "value": 1.05505585262,
    "ucum": "kJ"
  },
  "[Btu_th]": {
    "value": 1.05435,
    "ucum": "kJ"
  },
  "[Btu]": {
    "value": 1,
    "ucum": "[Btu_th]"
  },
  "[HP]": {
    "value": 550,
    "ucum": "[ft_i].[lbf_av]/s"
  },
  "tex": {
    "value": 1,
    "ucum": "g/km"
  },
  "[den]": {
    "value": 1,
    "ucum": "g/9/km"
  },
  "m[H2O]": {
    "value": 9.80665,
    "ucum": "kPa"
  },
  "m[Hg]": {
    "value": 133.322,
    "ucum": "kPa"
  },
  "[in_i'H2O]": {
    "value": 1,
    "ucum": "m[H2O].[in_i]/m"
  },
  "[in_i'Hg]": {
    "value": 1,
    "ucum": "m[Hg].[in_i]/m"
  },
  "[PRU]": {
    "value": 1,
    "ucum": "mm[Hg].s/ml"
  },
  "[wood'U]": {
    "value": 1,
    "ucum": "mm[Hg].min/L"
  },
  "[diop]": {
    "value": 1,
    "ucum": "/m"
  },
  "[p'diop]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "%[slope]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "[mesh_i]": {
    "value": 1,
    "ucum": "/[in_i]"
  },
  "[Ch]": {
    "value": 1,
    "ucum": "mm/3"
  },
  "[drp]": {
    "value": 1,
    "ucum": "ml/20"
  },
  "[hnsf'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MET]": {
    "value": 3.5,
    "ucum": "mL/min/kg"
  },
  "[hp'_X]": {
    "value": null,
    "ucum": "hpX(1 1)"
  },
  "[hp'_C]": {
    "value": null,
    "ucum": "hpC(1 1)"
  },
  "[hp'_M]": {
    "value": null,
    "ucum": "hpM(1 1)"
  },
  "[hp'_Q]": {
    "value": null,
    "ucum": "hpQ(1 1)"
  },
  "[hp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "eq": {
    "value": 1,
    "ucum": "mol"
  },
  "osm": {
    "value": 1,
    "ucum": "mol"
  },
  "[pH]": {
    "value": null,
    "ucum": "pH(1 mol/l)"
  },
  "g%": {
    "value": 1,
    "ucum": "g/dl"
  },
  "[S]": {
    "value": 1,
    "ucum": "10*-13.s"
  },
  "[HPF]": {
    "value": 1,
    "ucum": "1"
  },
  "[LPF]": {
    "value": 100,
    "ucum": "1"
  },
  "kat": {
    "value": 1,
    "ucum": "mol/s"
  },
  "U": {
    "value": 1,
    "ucum": "umol/min"
  },
  "[iU]": {
    "value": 1,
    "ucum": "1"
  },
  "[IU]": {
    "value": 1,
    "ucum": "[iU]"
  },
  "[arb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[USP'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[GPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[APL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[beth'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[anti'Xa'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[todd'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[dye'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[smgy'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[bdsk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[ka'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[knk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[mclg'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[tb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[CCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[TCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[EID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[PFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[FFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[CFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[BAU]": {
    "value": 1,
    "ucum": "1"
  },
  "[AU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Amb'a'1'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[PNU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Lf]": {
    "value": 1,
    "ucum": "1"
  },
  "[D'ag'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[FEU]": {
    "value": 1,
    "ucum": "1"
  },
  "[ELU]": {
    "value": 1,
    "ucum": "1"
  },
  "[EU]": {
    "value": 1,
    "ucum": "1"
  },
  "Np": {
    "value": null,
    "ucum": "ln(1 1)"
  },
  "B": {
    "value": null,
    "ucum": "lg(1 1)"
  },
  "B[SPL]": {
    "value": null,
    "ucum": "2lg(2 10*-5.Pa)"
  },
  "B[V]": {
    "value": null,
    "ucum": "2lg(1 V)"
  },
  "B[mV]": {
    "value": null,
    "ucum": "2lg(1 mV)"
  },
  "B[uV]": {
    "value": null,
    "ucum": "2lg(1 uV)"
  },
  "B[10.nV]": {
    "value": null,
    "ucum": "2lg(10 nV)"
  },
  "B[W]": {
    "value": null,
    "ucum": "lg(1 W)"
  },
  "B[kW]": {
    "value": null,
    "ucum": "lg(1 kW)"
  },
  "st": {
    "value": 1,
    "ucum": "m3"
  },
  "Ao": {
    "value": 0.1,
    "ucum": "nm"
  },
  "b": {
    "value": 100,
    "ucum": "fm2"
  },
  "att": {
    "value": 1,
    "ucum": "kgf/cm2"
  },
  "mho": {
    "value": 1,
    "ucum": "S"
  },
  "[psi]": {
    "value": 1,
    "ucum": "[lbf_av]/[in_i]2"
  },
  "circ": {
    "value": 2,
    "ucum": "[pi].rad"
  },
  "sph": {
    "value": 4,
    "ucum": "[pi].sr"
  },
  "[car_m]": {
    "value": 0.2,
    "ucum": "g"
  },
  "[car_Au]": {
    "value": 1,
    "ucum": "/24"
  },
  "[smoot]": {
    "value": 67,
    "ucum": "[in_i]"
  },
  "bit_s": {
    "value": null,
    "ucum": "ld(1 1)"
  },
  "bit": {
    "value": 1,
    "ucum": "1"
  },
  "By": {
    "value": 8,
    "ucum": "bit"
  },
  "Bd": {
    "value": 1,
    "ucum": "/s"
  }
}

},{}],2:[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],3:[function(require,module,exports){
module.exports={
  "Y": {
    "CODE": "YA",
    "names": [
      "yotta"
    ],
    "printSymbols": [
      "Y"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>24</sup>",
        "numeric": 1e+24
      }
    ]
  },
  "Z": {
    "CODE": "ZA",
    "names": [
      "zetta"
    ],
    "printSymbols": [
      "Z"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>21</sup>",
        "numeric": 1e+21
      }
    ]
  },
  "E": {
    "CODE": "EX",
    "names": [
      "exa"
    ],
    "printSymbols": [
      "E"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>18</sup>",
        "numeric": 1000000000000000000
      }
    ]
  },
  "P": {
    "CODE": "PT",
    "names": [
      "peta"
    ],
    "printSymbols": [
      "P"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>15</sup>",
        "numeric": 1000000000000000
      }
    ]
  },
  "T": {
    "CODE": "TR",
    "names": [
      "tera"
    ],
    "printSymbols": [
      "T"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>12</sup>",
        "numeric": 1000000000000
      }
    ]
  },
  "G": {
    "CODE": "GA",
    "names": [
      "giga"
    ],
    "printSymbols": [
      "G"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>9</sup>",
        "numeric": 1000000000
      }
    ]
  },
  "M": {
    "CODE": "MA",
    "names": [
      "mega"
    ],
    "printSymbols": [
      "M"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>6</sup>",
        "numeric": 1000000
      }
    ]
  },
  "k": {
    "CODE": "K",
    "names": [
      "kilo"
    ],
    "printSymbols": [
      "k"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>3</sup>",
        "numeric": 1000
      }
    ]
  },
  "h": {
    "CODE": "H",
    "names": [
      "hecto"
    ],
    "printSymbols": [
      "h"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>2</sup>",
        "numeric": 100
      }
    ]
  },
  "da": {
    "CODE": "DA",
    "names": [
      "deka"
    ],
    "printSymbols": [
      "da"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>1</sup>",
        "numeric": 10
      }
    ]
  },
  "d": {
    "CODE": "D",
    "names": [
      "deci"
    ],
    "printSymbols": [
      "d"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-1</sup>",
        "numeric": 0.1
      }
    ]
  },
  "c": {
    "CODE": "C",
    "names": [
      "centi"
    ],
    "printSymbols": [
      "c"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-2</sup>",
        "numeric": 0.01
      }
    ]
  },
  "m": {
    "CODE": "M",
    "names": [
      "milli"
    ],
    "printSymbols": [
      "m"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-3</sup>",
        "numeric": 0.001
      }
    ]
  },
  "u": {
    "CODE": "U",
    "names": [
      "micro"
    ],
    "printSymbols": [
      "&#956;"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-6</sup>",
        "numeric": 0.000001
      }
    ]
  },
  "n": {
    "CODE": "N",
    "names": [
      "nano"
    ],
    "printSymbols": [
      "n"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-9</sup>",
        "numeric": 1e-9
      }
    ]
  },
  "p": {
    "CODE": "P",
    "names": [
      "pico"
    ],
    "printSymbols": [
      "p"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-12</sup>",
        "numeric": 1e-12
      }
    ]
  },
  "f": {
    "CODE": "F",
    "names": [
      "femto"
    ],
    "printSymbols": [
      "f"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-15</sup>",
        "numeric": 1e-15
      }
    ]
  },
  "a": {
    "CODE": "A",
    "names": [
      "atto"
    ],
    "printSymbols": [
      "a"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-18</sup>",
        "numeric": 1e-18
      }
    ]
  },
  "z": {
    "CODE": "ZO",
    "names": [
      "zepto"
    ],
    "printSymbols": [
      "z"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-21</sup>",
        "numeric": 1e-21
      }
    ]
  },
  "y": {
    "CODE": "YO",
    "names": [
      "yocto"
    ],
    "printSymbols": [
      "y"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-24</sup>",
        "numeric": 1e-24
      }
    ]
  },
  "Ki": {
    "CODE": "KIB",
    "names": [
      "kibi"
    ],
    "printSymbols": [
      "Ki"
    ],
    "values": [
      {
        "printable": "1024",
        "numeric": 1024
      }
    ]
  },
  "Mi": {
    "CODE": "MIB",
    "names": [
      "mebi"
    ],
    "printSymbols": [
      "Mi"
    ],
    "values": [
      {
        "printable": "1048576",
        "numeric": 1048576
      }
    ]
  },
  "Gi": {
    "CODE": "GIB",
    "names": [
      "gibi"
    ],
    "printSymbols": [
      "Gi"
    ],
    "values": [
      {
        "printable": "1073741824",
        "numeric": 1073741824
      }
    ]
  },
  "Ti": {
    "CODE": "TIB",
    "names": [
      "tebi"
    ],
    "printSymbols": [
      "Ti"
    ],
    "values": [
      {
        "printable": "1099511627776",
        "numeric": 1099511627776
      }
    ]
  }
}

},{}],4:[function(require,module,exports){
module.exports={
  "Y": 1e+24,
  "Z": 1e+21,
  "E": 1000000000000000000,
  "P": 1000000000000000,
  "T": 1000000000000,
  "G": 1000000000,
  "M": 1000000,
  "k": 1000,
  "h": 100,
  "da": 10,
  "d": 0.1,
  "c": 0.01,
  "m": 0.001,
  "u": 0.000001,
  "n": 1e-9,
  "p": 1e-12,
  "f": 1e-15,
  "a": 1e-18,
  "z": 1e-21,
  "y": 1e-24,
  "Ki": 1024,
  "Mi": 1048576,
  "Gi": 1073741824,
  "Ti": 1099511627776
}

},{}],5:[function(require,module,exports){
module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { start: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          function(e) {
            return e ; // cleanup(e);
          },
          peg$FAILED,
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(e) {return multiply({value:1, units:{}}, [["/", e]]);},
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          [],
          function(t, ms) {
            return multiply(t, ms);
          },
          null,
          function(e, exp) {return e.ann && exp;},
          void 0,
          function(e, exp) {
            return topower(e, exp);
          },
          function(d) {
           var ret = {
              value: d,
              units: {}
            };
            return ret;
          },
          function(u) {return u;},
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(e) {return e;},
          /^[+\-]/,
          { type: "class", value: "[+\\-]", description: "[+\\-]" },
          function(s, d) {return (s=="-") ? (-1*d) : d},
          function(p, a) {return(p && !ismetric(a));},
          function(p, a) {
            var ret = a;
            var u = Object.keys(ret.units)[0];

            // console.log("simpleUnit: p:", JSON.stringify(p, null, 2), "a: ", JSON.stringify(a, null, 2));

            if (p){
              ret.value = ret.value * prefixes[p];
              ret.metadata = {};
              if(prefixMetadata[p]){
                // if this prefix has metadata, augment the return with it
                Object.keys(prefixMetadata[p]).forEach(function(key){
                  if(!ret.metadata[u]){
                    ret.metadata[u] = { prefix: {} };
                  }
                  ret.metadata[u].prefix[key] = prefixMetadata[p][key];
                });
              }

              // merge in the unit metadata
              if(unitMetadata[u]){
                //console.log("simpleUnit: ", JSON.stringify(unitMetadata[u], null ,2));
                Object.keys(unitMetadata[u]).forEach(function(key){
                  if(!ret.metadata[u]){
                    ret.metadata[u] = {};
                  }
                  ret.metadata[u][key] = unitMetadata[u][key];
                });
              }
            }

            //console.log("simpleUnit: ret: ", JSON.stringify(ret, null ,2));
            return ret;
          },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          "e",
          { type: "literal", value: "e", description: "\"e\"" },
          function(v, epresent, e) {return (!epresent && !!e);},
          function(v, epresent, e) {
            return parseInt(v.join(""))*Math.pow(10, e||0);
          },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          /^[^}]/,
          { type: "class", value: "[^}]", description: "[^}]" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(m) {return /[^\x00-\x7F]/.test(m);},
          function(m) { return {value: 1, units:{}, ann: m} },
          "[anti'Xa'U]",
          { type: "literal", value: "[anti'Xa'U]", description: "\"[anti'Xa'U]\"" },
          function(u) {return {"value": 1, "units": {"[anti'Xa'U]": 1}, "metadata": {"[anti'Xa'U]":{"isBase":false,"CODE":"[ANTI'XA'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["anti factor Xa unit"],"properties":["biologic activity of factor Xa inhibitor (heparin)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Amb'a'1'U]",
          { type: "literal", value: "[Amb'a'1'U]", description: "\"[Amb'a'1'U]\"" },
          function(u) {return {"value": 1, "units": {"[Amb'a'1'U]": 1}, "metadata": {"[Amb'a'1'U]":{"isBase":false,"CODE":"[AMB'A'1'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["allergen unit for Ambrosia artemisiifolia"],"printSymbols":["Amb a 1 U"],"properties":["procedure defined amount of the major allergen of ragweed."],"values":[{"printable":"1","numeric":1}]}}};},
          "[stone_av]",
          { type: "literal", value: "[stone_av]", description: "\"[stone_av]\"" },
          function(u) {return {"value": 1, "units": {"[stone_av]": 1}, "metadata": {"[stone_av]":{"isBase":false,"CODE":"[STONE_AV]","isMetric":"no","class":"avoirdupois","names":["stone","British stone"],"properties":["mass"],"values":[{"printable":"14","numeric":14}]}}};},
          "[in_i'H2O]",
          { type: "literal", value: "[in_i'H2O]", description: "\"[in_i'H2O]\"" },
          function(u) {return {"value": 1, "units": {"[in_i'H2O]": 1}, "metadata": {"[in_i'H2O]":{"isBase":false,"CODE":"[IN_I'H2O]","isMetric":"no","class":"clinical","names":["inch of water column"],"printSymbols":["in&#160;H<sub>\n            <r>2</r>\n         </sub>O"],"properties":["pressure"],"values":[{"printable":"1","numeric":1}]}}};},
          "[ston_av]",
          { type: "literal", value: "[ston_av]", description: "\"[ston_av]\"" },
          function(u) {return {"value": 1, "units": {"[ston_av]": 1}, "metadata": {"[ston_av]":{"isBase":false,"CODE":"[STON_AV]","isMetric":"no","class":"avoirdupois","names":["short ton","U.S. ton"],"properties":["mass"],"values":[{"printable":"20","numeric":20}]}}};},
          "[TCID_50]",
          { type: "literal", value: "[TCID_50]", description: "\"[TCID_50]\"" },
          function(u) {return {"value": 1, "units": {"[TCID_50]": 1}, "metadata": {"[TCID_50]":{"isBase":false,"CODE":"[TCID_50]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["50% tissue culture infectious dose"],"printSymbols":["TCID<sub>50</sub>"],"properties":["biologic activity (infectivity) of an infectious agent preparation"],"values":[{"printable":"1","numeric":1}]}}};},
          "[CCID_50]",
          { type: "literal", value: "[CCID_50]", description: "\"[CCID_50]\"" },
          function(u) {return {"value": 1, "units": {"[CCID_50]": 1}, "metadata": {"[CCID_50]":{"isBase":false,"CODE":"[CCID_50]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["50% cell culture infectious dose"],"printSymbols":["CCID<sub>50</sub>"],"properties":["biologic activity (infectivity) of an infectious agent preparation"],"values":[{"printable":"1","numeric":1}]}}};},
          "[scwt_av]",
          { type: "literal", value: "[scwt_av]", description: "\"[scwt_av]\"" },
          function(u) {return {"value": 1, "units": {"[scwt_av]": 1}, "metadata": {"[scwt_av]":{"isBase":false,"CODE":"[SCWT_AV]","isMetric":"no","class":"avoirdupois","names":["short hundredweight","U.S. hundredweight"],"properties":["mass"],"values":[{"printable":"100","numeric":100}]}}};},
          "[lcwt_av]",
          { type: "literal", value: "[lcwt_av]", description: "\"[lcwt_av]\"" },
          function(u) {return {"value": 1, "units": {"[lcwt_av]": 1}, "metadata": {"[lcwt_av]":{"isBase":false,"CODE":"[LCWT_AV]","isMetric":"no","class":"avoirdupois","names":["long hunderdweight","British hundredweight"],"properties":["mass"],"values":[{"printable":"112","numeric":112}]}}};},
          "[lton_av]",
          { type: "literal", value: "[lton_av]", description: "\"[lton_av]\"" },
          function(u) {return {"value": 1, "units": {"[lton_av]": 1}, "metadata": {"[lton_av]":{"isBase":false,"CODE":"[LTON_AV]","isMetric":"no","class":"avoirdupois","names":["long ton","British ton"],"properties":["mass"],"values":[{"printable":"20","numeric":20}]}}};},
          "[in_i'Hg]",
          { type: "literal", value: "[in_i'Hg]", description: "\"[in_i'Hg]\"" },
          function(u) {return {"value": 1, "units": {"[in_i'Hg]": 1}, "metadata": {"[in_i'Hg]":{"isBase":false,"CODE":"[IN_I'HG]","isMetric":"no","class":"clinical","names":["inch of mercury column"],"printSymbols":["in&#160;Hg"],"properties":["pressure"],"values":[{"printable":"1","numeric":1}]}}};},
          "[tbs_us]",
          { type: "literal", value: "[tbs_us]", description: "\"[tbs_us]\"" },
          function(u) {return {"value": 1, "units": {"[tbs_us]": 1}, "metadata": {"[tbs_us]":{"isBase":false,"CODE":"[TBS_US]","isMetric":"no","class":"us-volumes","names":["tablespoon"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[dpt_us]",
          { type: "literal", value: "[dpt_us]", description: "\"[dpt_us]\"" },
          function(u) {return {"value": 1, "units": {"[dpt_us]": 1}, "metadata": {"[dpt_us]":{"isBase":false,"CODE":"[DPT_US]","isMetric":"no","class":"us-volumes","names":["dry pint"],"properties":["dry volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[bdsk'U]",
          { type: "literal", value: "[bdsk'U]", description: "\"[bdsk'U]\"" },
          function(u) {return {"value": 1, "units": {"[bdsk'U]": 1}, "metadata": {"[bdsk'U]":{"isBase":false,"CODE":"[BDSK'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Bodansky unit"],"properties":["biologic activity of phosphatase"],"values":[{"printable":"1","numeric":1}]}}};},
          "[smgy'U]",
          { type: "literal", value: "[smgy'U]", description: "\"[smgy'U]\"" },
          function(u) {return {"value": 1, "units": {"[smgy'U]": 1}, "metadata": {"[smgy'U]":{"isBase":false,"CODE":"[SMGY'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Somogyi unit"],"properties":["biologic activity of amylase"],"values":[{"printable":"1","numeric":1}]}}};},
          "[dqt_us]",
          { type: "literal", value: "[dqt_us]", description: "\"[dqt_us]\"" },
          function(u) {return {"value": 1, "units": {"[dqt_us]": 1}, "metadata": {"[dqt_us]":{"isBase":false,"CODE":"[DQT_US]","isMetric":"no","class":"us-volumes","names":["dry quart"],"properties":["dry volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[todd'U]",
          { type: "literal", value: "[todd'U]", description: "\"[todd'U]\"" },
          function(u) {return {"value": 1, "units": {"[todd'U]": 1}, "metadata": {"[todd'U]":{"isBase":false,"CODE":"[TODD'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Todd unit"],"properties":["biologic activity antistreptolysin O"],"values":[{"printable":"1","numeric":1}]}}};},
          "[D'ag'U]",
          { type: "literal", value: "[D'ag'U]", description: "\"[D'ag'U]\"" },
          function(u) {return {"value": 1, "units": {"[D'ag'U]": 1}, "metadata": {"[D'ag'U]":{"isBase":false,"CODE":"[D'AG'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["D-antigen unit"],"printSymbols":[""],"properties":["procedure defined amount of a poliomyelitis d-antigen substance"],"values":[{"printable":"1","numeric":1}]}}};},
          "[beth'U]",
          { type: "literal", value: "[beth'U]", description: "\"[beth'U]\"" },
          function(u) {return {"value": 1, "units": {"[beth'U]": 1}, "metadata": {"[beth'U]":{"isBase":false,"CODE":"[BETH'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Bethesda unit"],"properties":["biologic activity of factor VIII inhibitor"],"values":[{"printable":"1","numeric":1}]}}};},
          "[gal_wi]",
          { type: "literal", value: "[gal_wi]", description: "\"[gal_wi]\"" },
          function(u) {return {"value": 1, "units": {"[gal_wi]": 1}, "metadata": {"[gal_wi]":{"isBase":false,"CODE":"[GAL_WI]","isMetric":"no","class":"us-volumes","names":["historical winchester gallon"],"properties":["dry volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[crd_us]",
          { type: "literal", value: "[crd_us]", description: "\"[crd_us]\"" },
          function(u) {return {"value": 1, "units": {"[crd_us]": 1}, "metadata": {"[crd_us]":{"isBase":false,"CODE":"[CRD_US]","isMetric":"no","class":"us-volumes","names":["cord"],"properties":["fluid volume"],"values":[{"printable":"128","numeric":128}]}}};},
          "[min_us]",
          { type: "literal", value: "[min_us]", description: "\"[min_us]\"" },
          function(u) {return {"value": 1, "units": {"[min_us]": 1}, "metadata": {"[min_us]":{"isBase":false,"CODE":"[MIN_US]","isMetric":"no","class":"us-volumes","names":["minim"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[fdr_us]",
          { type: "literal", value: "[fdr_us]", description: "\"[fdr_us]\"" },
          function(u) {return {"value": 1, "units": {"[fdr_us]": 1}, "metadata": {"[fdr_us]":{"isBase":false,"CODE":"[FDR_US]","isMetric":"no","class":"us-volumes","names":["fluid dram"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[foz_us]",
          { type: "literal", value: "[foz_us]", description: "\"[foz_us]\"" },
          function(u) {return {"value": 1, "units": {"[foz_us]": 1}, "metadata": {"[foz_us]":{"isBase":false,"CODE":"[FOZ_US]","isMetric":"no","class":"us-volumes","names":["fluid ounce"],"printSymbols":["oz fl"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[gil_us]",
          { type: "literal", value: "[gil_us]", description: "\"[gil_us]\"" },
          function(u) {return {"value": 1, "units": {"[gil_us]": 1}, "metadata": {"[gil_us]":{"isBase":false,"CODE":"[GIL_US]","isMetric":"no","class":"us-volumes","names":["gill"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[bbl_us]",
          { type: "literal", value: "[bbl_us]", description: "\"[bbl_us]\"" },
          function(u) {return {"value": 1, "units": {"[bbl_us]": 1}, "metadata": {"[bbl_us]":{"isBase":false,"CODE":"[BBL_US]","isMetric":"no","class":"us-volumes","names":["barrel"],"properties":["fluid volume"],"values":[{"printable":"42","numeric":42}]}}};},
          "[gal_us]",
          { type: "literal", value: "[gal_us]", description: "\"[gal_us]\"" },
          function(u) {return {"value": 1, "units": {"[gal_us]": 1}, "metadata": {"[gal_us]":{"isBase":false,"CODE":"[GAL_US]","isMetric":"no","class":"us-volumes","names":["Queen Anne's wine gallon"],"properties":["fluid volume"],"values":[{"printable":"231","numeric":231}]}}};},
          "[acr_br]",
          { type: "literal", value: "[acr_br]", description: "\"[acr_br]\"" },
          function(u) {return {"value": 1, "units": {"[acr_br]": 1}, "metadata": {"[acr_br]":{"isBase":false,"CODE":"[ACR_BR]","isMetric":"no","class":"brit-length","names":["acre"],"properties":["area"],"values":[{"printable":"4840","numeric":4840}]}}};},
          "[nmi_br]",
          { type: "literal", value: "[nmi_br]", description: "\"[nmi_br]\"" },
          function(u) {return {"value": 1, "units": {"[nmi_br]": 1}, "metadata": {"[nmi_br]":{"isBase":false,"CODE":"[NMI_BR]","isMetric":"no","class":"brit-length","names":["nautical mile"],"properties":["length"],"values":[{"printable":"6080","numeric":6080}]}}};},
          "[fth_br]",
          { type: "literal", value: "[fth_br]", description: "\"[fth_br]\"" },
          function(u) {return {"value": 1, "units": {"[fth_br]": 1}, "metadata": {"[fth_br]":{"isBase":false,"CODE":"[FTH_BR]","isMetric":"no","class":"brit-length","names":["fathom"],"properties":["length"],"values":[{"printable":"6","numeric":6}]}}};},
          "[mil_us]",
          { type: "literal", value: "[mil_us]", description: "\"[mil_us]\"" },
          function(u) {return {"value": 1, "units": {"[mil_us]": 1}, "metadata": {"[mil_us]":{"isBase":false,"CODE":"[MIL_US]","isMetric":"no","class":"us-lengths","names":["mil"],"properties":["length"],"values":[{"printable":"1 &#215; 10<sup>-3</sup>","numeric":0.001}]}}};},
          "[smi_us]",
          { type: "literal", value: "[smi_us]", description: "\"[smi_us]\"" },
          function(u) {return {"value": 1, "units": {"[smi_us]": 1}, "metadata": {"[smi_us]":{"isBase":false,"CODE":"[SMI_US]","isMetric":"no","class":"us-lengths","names":["square mile"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[acr_us]",
          { type: "literal", value: "[acr_us]", description: "\"[acr_us]\"" },
          function(u) {return {"value": 1, "units": {"[acr_us]": 1}, "metadata": {"[acr_us]":{"isBase":false,"CODE":"[ACR_US]","isMetric":"no","class":"us-lengths","names":["acre"],"properties":["area"],"values":[{"printable":"160","numeric":160}]}}};},
          "[fur_us]",
          { type: "literal", value: "[fur_us]", description: "\"[fur_us]\"" },
          function(u) {return {"value": 1, "units": {"[fur_us]": 1}, "metadata": {"[fur_us]":{"isBase":false,"CODE":"[FUR_US]","isMetric":"no","class":"us-lengths","names":["furlong"],"properties":["length"],"values":[{"printable":"40","numeric":40}]}}};},
          "[fth_us]",
          { type: "literal", value: "[fth_us]", description: "\"[fth_us]\"" },
          function(u) {return {"value": 1, "units": {"[fth_us]": 1}, "metadata": {"[fth_us]":{"isBase":false,"CODE":"[FTH_US]","isMetric":"no","class":"us-lengths","names":["fathom"],"properties":["length"],"values":[{"printable":"6","numeric":6}]}}};},
          "[rlk_us]",
          { type: "literal", value: "[rlk_us]", description: "\"[rlk_us]\"" },
          function(u) {return {"value": 1, "units": {"[rlk_us]": 1}, "metadata": {"[rlk_us]":{"isBase":false,"CODE":"[RLK_US]","isMetric":"no","class":"us-lengths","names":["link for Ramden's chain"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[rch_us]",
          { type: "literal", value: "[rch_us]", description: "\"[rch_us]\"" },
          function(u) {return {"value": 1, "units": {"[rch_us]": 1}, "metadata": {"[rch_us]":{"isBase":false,"CODE":"[RCH_US]","isMetric":"no","class":"us-lengths","names":["Ramden's chain","Engineer's chain"],"properties":["length"],"values":[{"printable":"100","numeric":100}]}}};},
          "[lbf_av]",
          { type: "literal", value: "[lbf_av]", description: "\"[lbf_av]\"" },
          function(u) {return {"value": 1, "units": {"[lbf_av]": 1}, "metadata": {"[lbf_av]":{"isBase":false,"CODE":"[LBF_AV]","isMetric":"no","class":"const","names":["pound force"],"printSymbols":["lbf"],"properties":["force"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hnsf'U]",
          { type: "literal", value: "[hnsf'U]", description: "\"[hnsf'U]\"" },
          function(u) {return {"value": 1, "units": {"[hnsf'U]": 1}, "metadata": {"[hnsf'U]":{"isBase":false,"CODE":"[HNSF'U]","isMetric":"no","class":"clinical","names":["Hounsfield unit"],"printSymbols":["HF"],"properties":["x-ray attenuation"],"values":[{"printable":"1","numeric":1}]}}};},
          "[mesh_i]",
          { type: "literal", value: "[mesh_i]", description: "\"[mesh_i]\"" },
          function(u) {return {"value": 1, "units": {"[mesh_i]": 1}, "metadata": {"[mesh_i]":{"isBase":false,"CODE":"[MESH_I]","isMetric":"no","class":"clinical","names":["mesh"],"properties":["lineic number"],"values":[{"printable":"1","numeric":1}]}}};},
          "%[slope]",
          { type: "literal", value: "%[slope]", description: "\"%[slope]\"" },
          function(u) {return {"value": 1, "units": {"%[slope]": 1}, "metadata": {"%[slope]":{"isBase":false,"CODE":"%[SLOPE]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["percent of slope"],"printSymbols":["%"],"properties":["slope"],"values":[{"printable":"<function name=\"100tan\" value=\"1\" Unit=\"deg\"/>","numeric":null}]}}};},
          "[p'diop]",
          { type: "literal", value: "[p'diop]", description: "\"[p'diop]\"" },
          function(u) {return {"value": 1, "units": {"[p'diop]": 1}, "metadata": {"[p'diop]":{"isBase":false,"CODE":"[P'DIOP]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["prism diopter"],"printSymbols":["PD"],"properties":["refraction of a prism"],"values":[{"printable":"<function name=\"tanTimes100\" value=\"1\" Unit=\"deg\"/>","numeric":null}]}}};},
          "[gil_br]",
          { type: "literal", value: "[gil_br]", description: "\"[gil_br]\"" },
          function(u) {return {"value": 1, "units": {"[gil_br]": 1}, "metadata": {"[gil_br]":{"isBase":false,"CODE":"[GIL_BR]","isMetric":"no","class":"brit-volumes","names":["gill"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[wood'U]",
          { type: "literal", value: "[wood'U]", description: "\"[wood'U]\"" },
          function(u) {return {"value": 1, "units": {"[wood'U]": 1}, "metadata": {"[wood'U]":{"isBase":false,"CODE":"[WOOD'U]","isMetric":"no","class":"clinical","names":["Wood unit"],"printSymbols":["Wood U."],"properties":["fluid resistance"],"values":[{"printable":"1","numeric":1}]}}};},
          "cal_[15]",
          { type: "literal", value: "cal_[15]", description: "\"cal_[15]\"" },
          function(u) {return {"value": 1, "units": {"cal_[15]": 1}, "metadata": {"cal_[15]":{"isBase":false,"CODE":"CAL_[15]","isMetric":"yes","class":"heat","names":["calorie at 15 °C"],"printSymbols":["cal<sub>15&#176;C</sub>"],"properties":["energy"],"values":[{"printable":"4.18580","numeric":4.1858}]}}};},
          "cal_[20]",
          { type: "literal", value: "cal_[20]", description: "\"cal_[20]\"" },
          function(u) {return {"value": 1, "units": {"cal_[20]": 1}, "metadata": {"cal_[20]":{"isBase":false,"CODE":"CAL_[20]","isMetric":"yes","class":"heat","names":["calorie at 20 °C"],"printSymbols":["cal<sub>20&#176;C</sub>"],"properties":["energy"],"values":[{"printable":"4.18190","numeric":4.1819}]}}};},
          "[foz_br]",
          { type: "literal", value: "[foz_br]", description: "\"[foz_br]\"" },
          function(u) {return {"value": 1, "units": {"[foz_br]": 1}, "metadata": {"[foz_br]":{"isBase":false,"CODE":"[FOZ_BR]","isMetric":"no","class":"brit-volumes","names":["fluid ounce"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[fdr_br]",
          { type: "literal", value: "[fdr_br]", description: "\"[fdr_br]\"" },
          function(u) {return {"value": 1, "units": {"[fdr_br]": 1}, "metadata": {"[fdr_br]":{"isBase":false,"CODE":"[FDR_BR]","isMetric":"no","class":"brit-volumes","names":["fluid dram"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[srd_us]",
          { type: "literal", value: "[srd_us]", description: "\"[srd_us]\"" },
          function(u) {return {"value": 1, "units": {"[srd_us]": 1}, "metadata": {"[srd_us]":{"isBase":false,"CODE":"[SRD_US]","isMetric":"no","class":"us-lengths","names":["square rod"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[min_br]",
          { type: "literal", value: "[min_br]", description: "\"[min_br]\"" },
          function(u) {return {"value": 1, "units": {"[min_br]": 1}, "metadata": {"[min_br]":{"isBase":false,"CODE":"[MIN_BR]","isMetric":"no","class":"brit-volumes","names":["minim"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[EID_50]",
          { type: "literal", value: "[EID_50]", description: "\"[EID_50]\"" },
          function(u) {return {"value": 1, "units": {"[EID_50]": 1}, "metadata": {"[EID_50]":{"isBase":false,"CODE":"[EID_50]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["50% embryo infectious dose"],"printSymbols":["EID<sub>50</sub>"],"properties":["biologic activity (infectivity) of an infectious agent preparation"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Btu_th]",
          { type: "literal", value: "[Btu_th]", description: "\"[Btu_th]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_th]": 1}, "metadata": {"[Btu_th]":{"isBase":false,"CODE":"[BTU_TH]","isMetric":"no","class":"heat","names":["thermochemical British thermal unit"],"printSymbols":["Btu<sub>th</sub>"],"properties":["energy"],"values":[{"printable":"1.054350","numeric":1.05435}]}}};},
          "[Btu_IT]",
          { type: "literal", value: "[Btu_IT]", description: "\"[Btu_IT]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_IT]": 1}, "metadata": {"[Btu_IT]":{"isBase":false,"CODE":"[BTU_IT]","isMetric":"no","class":"heat","names":["international table British thermal unit"],"printSymbols":["Btu<sub>IT</sub>"],"properties":["energy"],"values":[{"printable":"1.05505585262","numeric":1.05505585262}]}}};},
          "[car_Au]",
          { type: "literal", value: "[car_Au]", description: "\"[car_Au]\"" },
          function(u) {return {"value": 1, "units": {"[car_Au]": 1}, "metadata": {"[car_Au]":{"isBase":false,"CODE":"[CAR_AU]","isMetric":"no","class":"misc","names":["carat of gold alloys"],"printSymbols":["ct<sub>\n            <r>Au</r>\n         </sub>"],"properties":["mass fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Btu_60]",
          { type: "literal", value: "[Btu_60]", description: "\"[Btu_60]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_60]": 1}, "metadata": {"[Btu_60]":{"isBase":false,"CODE":"[BTU_60]","isMetric":"no","class":"heat","names":["British thermal unit at 60 °F"],"printSymbols":["Btu<sub>60&#176;F</sub>"],"properties":["energy"],"values":[{"printable":"1.05468","numeric":1.05468}]}}};},
          "[Btu_59]",
          { type: "literal", value: "[Btu_59]", description: "\"[Btu_59]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_59]": 1}, "metadata": {"[Btu_59]":{"isBase":false,"CODE":"[BTU_59]","isMetric":"no","class":"heat","names":["British thermal unit at 59 °F"],"printSymbols":["Btu<sub>59&#176;F</sub>"],"properties":["energy"],"values":[{"printable":"1.05480","numeric":1.0548}]}}};},
          "[Btu_39]",
          { type: "literal", value: "[Btu_39]", description: "\"[Btu_39]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_39]": 1}, "metadata": {"[Btu_39]":{"isBase":false,"CODE":"[BTU_39]","isMetric":"no","class":"heat","names":["British thermal unit at 39 °F"],"printSymbols":["Btu<sub>39&#176;F</sub>"],"properties":["energy"],"values":[{"printable":"1.05967","numeric":1.05967}]}}};},
          "[cup_us]",
          { type: "literal", value: "[cup_us]", description: "\"[cup_us]\"" },
          function(u) {return {"value": 1, "units": {"[cup_us]": 1}, "metadata": {"[cup_us]":{"isBase":false,"CODE":"[CUP_US]","isMetric":"no","class":"us-volumes","names":["cup"],"properties":["volume"],"values":[{"printable":"16","numeric":16}]}}};},
          "B[10.nV]",
          { type: "literal", value: "B[10.nV]", description: "\"B[10.nV]\"" },
          function(u) {return {"value": 1, "units": {"B[10.nV]": 1}, "metadata": {"B[10.nV]":{"isBase":false,"CODE":"B[10.NV]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel 10 nanovolt"],"printSymbols":["B(10 nV)"],"properties":["electric potential level"],"values":[{"printable":"<function name=\"lgTimes2\" value=\"10\" Unit=\"nV\"/>","numeric":null}]}}};},
          "[tsp_us]",
          { type: "literal", value: "[tsp_us]", description: "\"[tsp_us]\"" },
          function(u) {return {"value": 1, "units": {"[tsp_us]": 1}, "metadata": {"[tsp_us]":{"isBase":false,"CODE":"[TSP_US]","isMetric":"no","class":"us-volumes","names":["teaspoon"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[mclg'U]",
          { type: "literal", value: "[mclg'U]", description: "\"[mclg'U]\"" },
          function(u) {return {"value": 1, "units": {"[mclg'U]": 1}, "metadata": {"[mclg'U]":{"isBase":false,"CODE":"[MCLG'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Mac Lagan unit"],"properties":["arbitrary biologic activity"],"values":[{"printable":"1","numeric":1}]}}};},
          "[cicero]",
          { type: "literal", value: "[cicero]", description: "\"[cicero]\"" },
          function(u) {return {"value": 1, "units": {"[cicero]": 1}, "metadata": {"[cicero]":{"isBase":false,"CODE":"[CICERO]","isMetric":"no","class":"typeset","names":["cicero","Didot's pica"],"properties":["length"],"values":[{"printable":"12","numeric":12}]}}};},
          "[pwt_tr]",
          { type: "literal", value: "[pwt_tr]", description: "\"[pwt_tr]\"" },
          function(u) {return {"value": 1, "units": {"[pwt_tr]": 1}, "metadata": {"[pwt_tr]":{"isBase":false,"CODE":"[PWT_TR]","isMetric":"no","class":"troy","names":["pennyweight"],"printSymbols":["dwt"],"properties":["mass"],"values":[{"printable":"24","numeric":24}]}}};},
          "[pnt_pr]",
          { type: "literal", value: "[pnt_pr]", description: "\"[pnt_pr]\"" },
          function(u) {return {"value": 1, "units": {"[pnt_pr]": 1}, "metadata": {"[pnt_pr]":{"isBase":false,"CODE":"[PNT_PR]","isMetric":"no","class":"typeset","names":["Printer's point"],"properties":["length"],"values":[{"printable":"0.013837","numeric":0.013837}]}}};},
          "[pca_pr]",
          { type: "literal", value: "[pca_pr]", description: "\"[pca_pr]\"" },
          function(u) {return {"value": 1, "units": {"[pca_pr]": 1}, "metadata": {"[pca_pr]":{"isBase":false,"CODE":"[PCA_PR]","isMetric":"no","class":"typeset","names":["Printer's pica"],"properties":["length"],"values":[{"printable":"12","numeric":12}]}}};},
          "[gal_br]",
          { type: "literal", value: "[gal_br]", description: "\"[gal_br]\"" },
          function(u) {return {"value": 1, "units": {"[gal_br]": 1}, "metadata": {"[gal_br]":{"isBase":false,"CODE":"[GAL_BR]","isMetric":"no","class":"brit-volumes","names":["gallon"],"properties":["volume"],"values":[{"printable":"4.54609","numeric":4.54609}]}}};},
          "[yd_us]",
          { type: "literal", value: "[yd_us]", description: "\"[yd_us]\"" },
          function(u) {return {"value": 1, "units": {"[yd_us]": 1}, "metadata": {"[yd_us]":{"isBase":false,"CODE":"[YD_US]","isMetric":"no","class":"us-lengths","names":["yard"],"properties":["length"],"values":[{"printable":"3","numeric":3}]}}};},
          "[ligne]",
          { type: "literal", value: "[ligne]", description: "\"[ligne]\"" },
          function(u) {return {"value": 1, "units": {"[ligne]": 1}, "metadata": {"[ligne]":{"isBase":false,"CODE":"[LIGNE]","isMetric":"no","class":"typeset","names":["ligne","French line"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[tbs_m]",
          { type: "literal", value: "[tbs_m]", description: "\"[tbs_m]\"" },
          function(u) {return {"value": 1, "units": {"[tbs_m]": 1}, "metadata": {"[tbs_m]":{"isBase":false,"CODE":"[TBS_M]","isMetric":"no","class":"us-volumes","names":["metric tablespoon"],"properties":["volume"],"values":[{"printable":"15","numeric":15}]}}};},
          "[lb_ap]",
          { type: "literal", value: "[lb_ap]", description: "\"[lb_ap]\"" },
          function(u) {return {"value": 1, "units": {"[lb_ap]": 1}, "metadata": {"[lb_ap]":{"isBase":false,"CODE":"[LB_AP]","isMetric":"no","class":"apoth","names":["pound"],"printSymbols":["<strike>lb</strike>"],"properties":["mass"],"values":[{"printable":"12","numeric":12}]}}};},
          "[oz_ap]",
          { type: "literal", value: "[oz_ap]", description: "\"[oz_ap]\"" },
          function(u) {return {"value": 1, "units": {"[oz_ap]": 1}, "metadata": {"[oz_ap]":{"isBase":false,"CODE":"[OZ_AP]","isMetric":"no","class":"apoth","names":["ounce"],"printSymbols":["&#8485;"],"properties":["mass"],"values":[{"printable":"8","numeric":8}]}}};},
          "[dr_ap]",
          { type: "literal", value: "[dr_ap]", description: "\"[dr_ap]\"" },
          function(u) {return {"value": 1, "units": {"[dr_ap]": 1}, "metadata": {"[dr_ap]":{"isBase":false,"CODE":"[DR_AP]","isMetric":"no","class":"apoth","names":["dram","drachm"],"printSymbols":["&#658;"],"properties":["mass"],"values":[{"printable":"3","numeric":3}]}}};},
          "[sc_ap]",
          { type: "literal", value: "[sc_ap]", description: "\"[sc_ap]\"" },
          function(u) {return {"value": 1, "units": {"[sc_ap]": 1}, "metadata": {"[sc_ap]":{"isBase":false,"CODE":"[SC_AP]","isMetric":"no","class":"apoth","names":["scruple"],"printSymbols":["&#8456;"],"properties":["mass"],"values":[{"printable":"20","numeric":20}]}}};},
          "[tsp_m]",
          { type: "literal", value: "[tsp_m]", description: "\"[tsp_m]\"" },
          function(u) {return {"value": 1, "units": {"[tsp_m]": 1}, "metadata": {"[tsp_m]":{"isBase":false,"CODE":"[TSP_M]","isMetric":"no","class":"us-volumes","names":["metric teaspoon"],"properties":["volume"],"values":[{"printable":"5","numeric":5}]}}};},
          "[cup_m]",
          { type: "literal", value: "[cup_m]", description: "\"[cup_m]\"" },
          function(u) {return {"value": 1, "units": {"[cup_m]": 1}, "metadata": {"[cup_m]":{"isBase":false,"CODE":"[CUP_M]","isMetric":"no","class":"us-volumes","names":["metric cup"],"properties":["volume"],"values":[{"printable":"240","numeric":240}]}}};},
          "[lb_tr]",
          { type: "literal", value: "[lb_tr]", description: "\"[lb_tr]\"" },
          function(u) {return {"value": 1, "units": {"[lb_tr]": 1}, "metadata": {"[lb_tr]":{"isBase":false,"CODE":"[LB_TR]","isMetric":"no","class":"troy","names":["troy pound"],"printSymbols":["lb t"],"properties":["mass"],"values":[{"printable":"12","numeric":12}]}}};},
          "[oz_tr]",
          { type: "literal", value: "[oz_tr]", description: "\"[oz_tr]\"" },
          function(u) {return {"value": 1, "units": {"[oz_tr]": 1}, "metadata": {"[oz_tr]":{"isBase":false,"CODE":"[OZ_TR]","isMetric":"no","class":"troy","names":["troy ounce"],"printSymbols":["oz t"],"properties":["mass"],"values":[{"printable":"20","numeric":20}]}}};},
          "[didot]",
          { type: "literal", value: "[didot]", description: "\"[didot]\"" },
          function(u) {return {"value": 1, "units": {"[didot]": 1}, "metadata": {"[didot]":{"isBase":false,"CODE":"[DIDOT]","isMetric":"no","class":"typeset","names":["didot","Didot's point"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[foz_m]",
          { type: "literal", value: "[foz_m]", description: "\"[foz_m]\"" },
          function(u) {return {"value": 1, "units": {"[foz_m]": 1}, "metadata": {"[foz_m]":{"isBase":false,"CODE":"[FOZ_M]","isMetric":"no","class":"us-volumes","names":["metric fluid ounce"],"printSymbols":["oz fl"],"properties":["fluid volume"],"values":[{"printable":"30","numeric":30}]}}};},
          "[car_m]",
          { type: "literal", value: "[car_m]", description: "\"[car_m]\"" },
          function(u) {return {"value": 1, "units": {"[car_m]": 1}, "metadata": {"[car_m]":{"isBase":false,"CODE":"[CAR_M]","isMetric":"no","class":"misc","names":["metric carat"],"printSymbols":["ct<sub>m</sub>"],"properties":["mass"],"values":[{"printable":"0.2","numeric":0.2}]}}};},
          "[smoot]",
          { type: "literal", value: "[smoot]", description: "\"[smoot]\"" },
          function(u) {return {"value": 1, "units": {"[smoot]": 1}, "metadata": {"[smoot]":{"isBase":false,"CODE":"[SMOOT]","isMetric":"no","class":"misc","names":["Smoot"],"printSymbols":[""],"properties":["length"],"values":[{"printable":"67","numeric":67}]}}};},
          "[knk'U]",
          { type: "literal", value: "[knk'U]", description: "\"[knk'U]\"" },
          function(u) {return {"value": 1, "units": {"[knk'U]": 1}, "metadata": {"[knk'U]":{"isBase":false,"CODE":"[KNK'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Kunkel unit"],"properties":["arbitrary biologic activity"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Btu_m]",
          { type: "literal", value: "[Btu_m]", description: "\"[Btu_m]\"" },
          function(u) {return {"value": 1, "units": {"[Btu_m]": 1}, "metadata": {"[Btu_m]":{"isBase":false,"CODE":"[BTU_M]","isMetric":"no","class":"heat","names":["mean British thermal unit"],"printSymbols":["Btu<sub>m</sub>"],"properties":["energy"],"values":[{"printable":"1.05587","numeric":1.05587}]}}};},
          "[dr_av]",
          { type: "literal", value: "[dr_av]", description: "\"[dr_av]\"" },
          function(u) {return {"value": 1, "units": {"[dr_av]": 1}, "metadata": {"[dr_av]":{"isBase":false,"CODE":"[DR_AV]","isMetric":"no","class":"avoirdupois","names":["dram"],"properties":["mass"],"values":[{"printable":"1","numeric":1}]}}};},
          "[oz_av]",
          { type: "literal", value: "[oz_av]", description: "\"[oz_av]\"" },
          function(u) {return {"value": 1, "units": {"[oz_av]": 1}, "metadata": {"[oz_av]":{"isBase":false,"CODE":"[OZ_AV]","isMetric":"no","class":"avoirdupois","names":["ounce"],"printSymbols":["oz"],"properties":["mass"],"values":[{"printable":"1","numeric":1}]}}};},
          "[lb_av]",
          { type: "literal", value: "[lb_av]", description: "\"[lb_av]\"" },
          function(u) {return {"value": 1, "units": {"[lb_av]": 1}, "metadata": {"[lb_av]":{"isBase":false,"CODE":"[LB_AV]","isMetric":"no","class":"avoirdupois","names":["pound"],"printSymbols":["lb"],"properties":["mass"],"values":[{"printable":"7000","numeric":7000}]}}};},
          "[dye'U]",
          { type: "literal", value: "[dye'U]", description: "\"[dye'U]\"" },
          function(u) {return {"value": 1, "units": {"[dye'U]": 1}, "metadata": {"[dye'U]":{"isBase":false,"CODE":"[DYE'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Dye unit"],"properties":["biologic activity of amylase"],"values":[{"printable":"1","numeric":1}]}}};},
          "[pk_us]",
          { type: "literal", value: "[pk_us]", description: "\"[pk_us]\"" },
          function(u) {return {"value": 1, "units": {"[pk_us]": 1}, "metadata": {"[pk_us]":{"isBase":false,"CODE":"[PK_US]","isMetric":"no","class":"us-volumes","names":["peck"],"properties":["dry volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[APL'U]",
          { type: "literal", value: "[APL'U]", description: "\"[APL'U]\"" },
          function(u) {return {"value": 1, "units": {"[APL'U]": 1}, "metadata": {"[APL'U]":{"isBase":false,"CODE":"[APL'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["APL unit"],"properties":["biologic activity of anticardiolipin IgA"],"values":[{"printable":"1","numeric":1}]}}};},
          "[bu_us]",
          { type: "literal", value: "[bu_us]", description: "\"[bu_us]\"" },
          function(u) {return {"value": 1, "units": {"[bu_us]": 1}, "metadata": {"[bu_us]":{"isBase":false,"CODE":"[BU_US]","isMetric":"no","class":"us-volumes","names":["bushel"],"properties":["dry volume"],"values":[{"printable":"2150.42","numeric":2150.42}]}}};},
          "[pt_br]",
          { type: "literal", value: "[pt_br]", description: "\"[pt_br]\"" },
          function(u) {return {"value": 1, "units": {"[pt_br]": 1}, "metadata": {"[pt_br]":{"isBase":false,"CODE":"[PT_BR]","isMetric":"no","class":"brit-volumes","names":["pint"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[qt_br]",
          { type: "literal", value: "[qt_br]", description: "\"[qt_br]\"" },
          function(u) {return {"value": 1, "units": {"[qt_br]": 1}, "metadata": {"[qt_br]":{"isBase":false,"CODE":"[QT_BR]","isMetric":"no","class":"brit-volumes","names":["quart"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[bu_br]",
          { type: "literal", value: "[bu_br]", description: "\"[bu_br]\"" },
          function(u) {return {"value": 1, "units": {"[bu_br]": 1}, "metadata": {"[bu_br]":{"isBase":false,"CODE":"[BU_BR]","isMetric":"no","class":"brit-volumes","names":["bushel"],"properties":["volume"],"values":[{"printable":"4","numeric":4}]}}};},
          "[hp'_X]",
          { type: "literal", value: "[hp'_X]", description: "\"[hp'_X]\"" },
          function(u) {return {"value": 1, "units": {"[hp'_X]": 1}, "metadata": {"[hp'_X]":{"isBase":false,"CODE":"[HP'_X]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["homeopathic potency of decimal series (retired)"],"printSymbols":["X"],"properties":["homeopathic potency (retired)"],"values":[{"printable":"<function name=\"hpX\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "[MPL'U]",
          { type: "literal", value: "[MPL'U]", description: "\"[MPL'U]\"" },
          function(u) {return {"value": 1, "units": {"[MPL'U]": 1}, "metadata": {"[MPL'U]":{"isBase":false,"CODE":"[MPL'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["MPL unit"],"properties":["biologic activity of anticardiolipin IgM"],"values":[{"printable":"1","numeric":1}]}}};},
          "[GPL'U]",
          { type: "literal", value: "[GPL'U]", description: "\"[GPL'U]\"" },
          function(u) {return {"value": 1, "units": {"[GPL'U]": 1}, "metadata": {"[GPL'U]":{"isBase":false,"CODE":"[GPL'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["GPL unit"],"properties":["biologic activity of anticardiolipin IgG"],"values":[{"printable":"1","numeric":1}]}}};},
          "[USP'U]",
          { type: "literal", value: "[USP'U]", description: "\"[USP'U]\"" },
          function(u) {return {"value": 1, "units": {"[USP'U]": 1}, "metadata": {"[USP'U]":{"isBase":false,"CODE":"[USP'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["United States Pharmacopeia unit"],"printSymbols":["U.S.P."],"properties":["arbitrary"],"values":[{"printable":"1","numeric":1}]}}};},
          "[eps_0]",
          { type: "literal", value: "[eps_0]", description: "\"[eps_0]\"" },
          function(u) {return {"value": 1, "units": {"[eps_0]": 1}, "metadata": {"[eps_0]":{"isBase":false,"CODE":"[EPS_0]","isMetric":"yes","class":"const","names":["permittivity of vacuum"],"printSymbols":["<i>&#949;<sub>\n               <r>0</r>\n            </sub>\n         </i>"],"properties":["electric permittivity"],"values":[{"printable":"8.854187817 &#215; 10<sup>-12</sup>","numeric":8.854187817e-12}]}}};},
          "[fth_i]",
          { type: "literal", value: "[fth_i]", description: "\"[fth_i]\"" },
          function(u) {return {"value": 1, "units": {"[fth_i]": 1}, "metadata": {"[fth_i]":{"isBase":false,"CODE":"[FTH_I]","isMetric":"no","class":"intcust","names":["fathom"],"printSymbols":["fth"],"properties":["depth of water"],"values":[{"printable":"6","numeric":6}]}}};},
          "[nmi_i]",
          { type: "literal", value: "[nmi_i]", description: "\"[nmi_i]\"" },
          function(u) {return {"value": 1, "units": {"[nmi_i]": 1}, "metadata": {"[nmi_i]":{"isBase":false,"CODE":"[NMI_I]","isMetric":"no","class":"intcust","names":["nautical mile"],"printSymbols":["n.mi"],"properties":["length"],"values":[{"printable":"1852","numeric":1852}]}}};},
          "[pt_us]",
          { type: "literal", value: "[pt_us]", description: "\"[pt_us]\"" },
          function(u) {return {"value": 1, "units": {"[pt_us]": 1}, "metadata": {"[pt_us]":{"isBase":false,"CODE":"[PT_US]","isMetric":"no","class":"us-volumes","names":["pint"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[sin_i]",
          { type: "literal", value: "[sin_i]", description: "\"[sin_i]\"" },
          function(u) {return {"value": 1, "units": {"[sin_i]": 1}, "metadata": {"[sin_i]":{"isBase":false,"CODE":"[SIN_I]","isMetric":"no","class":"intcust","names":["square inch"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[sft_i]",
          { type: "literal", value: "[sft_i]", description: "\"[sft_i]\"" },
          function(u) {return {"value": 1, "units": {"[sft_i]": 1}, "metadata": {"[sft_i]":{"isBase":false,"CODE":"[SFT_I]","isMetric":"no","class":"intcust","names":["square foot"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[syd_i]",
          { type: "literal", value: "[syd_i]", description: "\"[syd_i]\"" },
          function(u) {return {"value": 1, "units": {"[syd_i]": 1}, "metadata": {"[syd_i]":{"isBase":false,"CODE":"[SYD_I]","isMetric":"no","class":"intcust","names":["square yard"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[cin_i]",
          { type: "literal", value: "[cin_i]", description: "\"[cin_i]\"" },
          function(u) {return {"value": 1, "units": {"[cin_i]": 1}, "metadata": {"[cin_i]":{"isBase":false,"CODE":"[CIN_I]","isMetric":"no","class":"intcust","names":["cubic inch"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[cft_i]",
          { type: "literal", value: "[cft_i]", description: "\"[cft_i]\"" },
          function(u) {return {"value": 1, "units": {"[cft_i]": 1}, "metadata": {"[cft_i]":{"isBase":false,"CODE":"[CFT_I]","isMetric":"no","class":"intcust","names":["cubic foot"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[cyd_i]",
          { type: "literal", value: "[cyd_i]", description: "\"[cyd_i]\"" },
          function(u) {return {"value": 1, "units": {"[cyd_i]": 1}, "metadata": {"[cyd_i]":{"isBase":false,"CODE":"[CYD_I]","isMetric":"no","class":"intcust","names":["cubic yard"],"printSymbols":["cu.yd"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[qt_us]",
          { type: "literal", value: "[qt_us]", description: "\"[qt_us]\"" },
          function(u) {return {"value": 1, "units": {"[qt_us]": 1}, "metadata": {"[qt_us]":{"isBase":false,"CODE":"[QT_US]","isMetric":"no","class":"us-volumes","names":["quart"],"properties":["fluid volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[arb'U]",
          { type: "literal", value: "[arb'U]", description: "\"[arb'U]\"" },
          function(u) {return {"value": 1, "units": {"[arb'U]": 1}, "metadata": {"[arb'U]":{"isBase":false,"CODE":"[ARB'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["arbitary unit"],"printSymbols":["arb. U"],"properties":["arbitrary"],"values":[{"printable":"1","numeric":1}]}}};},
          "[mil_i]",
          { type: "literal", value: "[mil_i]", description: "\"[mil_i]\"" },
          function(u) {return {"value": 1, "units": {"[mil_i]": 1}, "metadata": {"[mil_i]":{"isBase":false,"CODE":"[MIL_I]","isMetric":"no","class":"intcust","names":["mil"],"printSymbols":["mil"],"properties":["length"],"values":[{"printable":"1 &#215; 10<sup>-3</sup>","numeric":0.001}]}}};},
          "[cml_i]",
          { type: "literal", value: "[cml_i]", description: "\"[cml_i]\"" },
          function(u) {return {"value": 1, "units": {"[cml_i]": 1}, "metadata": {"[cml_i]":{"isBase":false,"CODE":"[CML_I]","isMetric":"no","class":"intcust","names":["circular mil"],"printSymbols":["circ.mil"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[kn_br]",
          { type: "literal", value: "[kn_br]", description: "\"[kn_br]\"" },
          function(u) {return {"value": 1, "units": {"[kn_br]": 1}, "metadata": {"[kn_br]":{"isBase":false,"CODE":"[KN_BR]","isMetric":"no","class":"brit-length","names":["knot"],"properties":["velocity"],"values":[{"printable":"1","numeric":1}]}}};},
          "[ft_us]",
          { type: "literal", value: "[ft_us]", description: "\"[ft_us]\"" },
          function(u) {return {"value": 1, "units": {"[ft_us]": 1}, "metadata": {"[ft_us]":{"isBase":false,"CODE":"[FT_US]","isMetric":"no","class":"us-lengths","names":["foot"],"printSymbols":["ft<sub>us</sub>"],"properties":["length"],"values":[{"printable":"1200","numeric":1200}]}}};},
          "[pouce]",
          { type: "literal", value: "[pouce]", description: "\"[pouce]\"" },
          function(u) {return {"value": 1, "units": {"[pouce]": 1}, "metadata": {"[pouce]":{"isBase":false,"CODE":"[POUCE]","isMetric":"no","class":"typeset","names":["pouce","French inch"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[in_us]",
          { type: "literal", value: "[in_us]", description: "\"[in_us]\"" },
          function(u) {return {"value": 1, "units": {"[in_us]": 1}, "metadata": {"[in_us]":{"isBase":false,"CODE":"[IN_US]","isMetric":"no","class":"us-lengths","names":["inch"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[rd_us]",
          { type: "literal", value: "[rd_us]", description: "\"[rd_us]\"" },
          function(u) {return {"value": 1, "units": {"[rd_us]": 1}, "metadata": {"[rd_us]":{"isBase":false,"CODE":"[RD_US]","isMetric":"no","class":"us-lengths","names":["rod"],"properties":["length"],"values":[{"printable":"16.5","numeric":16.5}]}}};},
          "[ch_us]",
          { type: "literal", value: "[ch_us]", description: "\"[ch_us]\"" },
          function(u) {return {"value": 1, "units": {"[ch_us]": 1}, "metadata": {"[ch_us]":{"isBase":false,"CODE":"[CH_US]","isMetric":"no","class":"us-lengths","names":["Gunter's chain","Surveyor's chain"],"properties":["length"],"values":[{"printable":"4","numeric":4}]}}};},
          "[lk_us]",
          { type: "literal", value: "[lk_us]", description: "\"[lk_us]\"" },
          function(u) {return {"value": 1, "units": {"[lk_us]": 1}, "metadata": {"[lk_us]":{"isBase":false,"CODE":"[LK_US]","isMetric":"no","class":"us-lengths","names":["link for Gunter's chain"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hp'_C]",
          { type: "literal", value: "[hp'_C]", description: "\"[hp'_C]\"" },
          function(u) {return {"value": 1, "units": {"[hp'_C]": 1}, "metadata": {"[hp'_C]":{"isBase":false,"CODE":"[HP'_C]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["homeopathic potency of centesimal series (retired)"],"printSymbols":["C"],"properties":["homeopathic potency (retired)"],"values":[{"printable":"<function name=\"hpC\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "[hp'_M]",
          { type: "literal", value: "[hp'_M]", description: "\"[hp'_M]\"" },
          function(u) {return {"value": 1, "units": {"[hp'_M]": 1}, "metadata": {"[hp'_M]":{"isBase":false,"CODE":"[HP'_M]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["homeopathic potency of millesimal series (retired)"],"printSymbols":["M"],"properties":["homeopathic potency (retired)"],"values":[{"printable":"<function name=\"hpM\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "[hp'_Q]",
          { type: "literal", value: "[hp'_Q]", description: "\"[hp'_Q]\"" },
          function(u) {return {"value": 1, "units": {"[hp'_Q]": 1}, "metadata": {"[hp'_Q]":{"isBase":false,"CODE":"[HP'_Q]","isMetric":"no","isSpecial":"yes","class":"clinical","names":["homeopathic potency of quintamillesimal series (retired)"],"printSymbols":["Q"],"properties":["homeopathic potency (retired)"],"values":[{"printable":"<function name=\"hpQ\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "[mi_br]",
          { type: "literal", value: "[mi_br]", description: "\"[mi_br]\"" },
          function(u) {return {"value": 1, "units": {"[mi_br]": 1}, "metadata": {"[mi_br]":{"isBase":false,"CODE":"[MI_BR]","isMetric":"no","class":"brit-length","names":["mile"],"properties":["length"],"values":[{"printable":"5280","numeric":5280}]}}};},
          "[mi_us]",
          { type: "literal", value: "[mi_us]", description: "\"[mi_us]\"" },
          function(u) {return {"value": 1, "units": {"[mi_us]": 1}, "metadata": {"[mi_us]":{"isBase":false,"CODE":"[MI_US]","isMetric":"no","class":"us-lengths","names":["mile"],"properties":["length"],"values":[{"printable":"8","numeric":8}]}}};},
          "[yd_br]",
          { type: "literal", value: "[yd_br]", description: "\"[yd_br]\"" },
          function(u) {return {"value": 1, "units": {"[yd_br]": 1}, "metadata": {"[yd_br]":{"isBase":false,"CODE":"[YD_BR]","isMetric":"no","class":"brit-length","names":["yard"],"properties":["length"],"values":[{"printable":"3","numeric":3}]}}};},
          "[pk_br]",
          { type: "literal", value: "[pk_br]", description: "\"[pk_br]\"" },
          function(u) {return {"value": 1, "units": {"[pk_br]": 1}, "metadata": {"[pk_br]":{"isBase":false,"CODE":"[PK_BR]","isMetric":"no","class":"brit-volumes","names":["peck"],"properties":["volume"],"values":[{"printable":"2","numeric":2}]}}};},
          "[pc_br]",
          { type: "literal", value: "[pc_br]", description: "\"[pc_br]\"" },
          function(u) {return {"value": 1, "units": {"[pc_br]": 1}, "metadata": {"[pc_br]":{"isBase":false,"CODE":"[PC_BR]","isMetric":"no","class":"brit-length","names":["pace"],"properties":["length"],"values":[{"printable":"2.5","numeric":2.5}]}}};},
          "[lk_br]",
          { type: "literal", value: "[lk_br]", description: "\"[lk_br]\"" },
          function(u) {return {"value": 1, "units": {"[lk_br]": 1}, "metadata": {"[lk_br]":{"isBase":false,"CODE":"[LK_BR]","isMetric":"no","class":"brit-length","names":["link for Gunter's chain"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[in_br]",
          { type: "literal", value: "[in_br]", description: "\"[in_br]\"" },
          function(u) {return {"value": 1, "units": {"[in_br]": 1}, "metadata": {"[in_br]":{"isBase":false,"CODE":"[IN_BR]","isMetric":"no","class":"brit-length","names":["inch"],"properties":["length"],"values":[{"printable":"2.539998","numeric":2.539998}]}}};},
          "[ft_br]",
          { type: "literal", value: "[ft_br]", description: "\"[ft_br]\"" },
          function(u) {return {"value": 1, "units": {"[ft_br]": 1}, "metadata": {"[ft_br]":{"isBase":false,"CODE":"[FT_BR]","isMetric":"no","class":"brit-length","names":["foot"],"properties":["length"],"values":[{"printable":"12","numeric":12}]}}};},
          "[rd_br]",
          { type: "literal", value: "[rd_br]", description: "\"[rd_br]\"" },
          function(u) {return {"value": 1, "units": {"[rd_br]": 1}, "metadata": {"[rd_br]":{"isBase":false,"CODE":"[RD_BR]","isMetric":"no","class":"brit-length","names":["rod"],"properties":["length"],"values":[{"printable":"16.5","numeric":16.5}]}}};},
          "[ch_br]",
          { type: "literal", value: "[ch_br]", description: "\"[ch_br]\"" },
          function(u) {return {"value": 1, "units": {"[ch_br]": 1}, "metadata": {"[ch_br]":{"isBase":false,"CODE":"[CH_BR]","isMetric":"no","class":"brit-length","names":["Gunter's chain"],"properties":["length"],"values":[{"printable":"4","numeric":4}]}}};},
          "[ft_i]",
          { type: "literal", value: "[ft_i]", description: "\"[ft_i]\"" },
          function(u) {return {"value": 1, "units": {"[ft_i]": 1}, "metadata": {"[ft_i]":{"isBase":false,"CODE":"[FT_I]","isMetric":"no","class":"intcust","names":["foot"],"printSymbols":["ft"],"properties":["length"],"values":[{"printable":"12","numeric":12}]}}};},
          "[hp_Q]",
          { type: "literal", value: "[hp_Q]", description: "\"[hp_Q]\"" },
          function(u) {return {"value": 1, "units": {"[hp_Q]": 1}, "metadata": {"[hp_Q]":{"isBase":false,"CODE":"[HP_Q]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of quintamillesimal hahnemannian series"],"printSymbols":["Q"],"properties":["homeopathic potency (Hahnemann)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hp_M]",
          { type: "literal", value: "[hp_M]", description: "\"[hp_M]\"" },
          function(u) {return {"value": 1, "units": {"[hp_M]": 1}, "metadata": {"[hp_M]":{"isBase":false,"CODE":"[HP_M]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of millesimal hahnemannian series"],"printSymbols":["M"],"properties":["homeopathic potency (Hahnemann)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hp_C]",
          { type: "literal", value: "[hp_C]", description: "\"[hp_C]\"" },
          function(u) {return {"value": 1, "units": {"[hp_C]": 1}, "metadata": {"[hp_C]":{"isBase":false,"CODE":"[HP_C]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of centesimal hahnemannian series"],"printSymbols":["C"],"properties":["homeopathic potency (Hahnemann)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hp_X]",
          { type: "literal", value: "[hp_X]", description: "\"[hp_X]\"" },
          function(u) {return {"value": 1, "units": {"[hp_X]": 1}, "metadata": {"[hp_X]":{"isBase":false,"CODE":"[HP_X]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of decimal hahnemannian series"],"printSymbols":["X"],"properties":["homeopathic potency (Hahnemann)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[kp_C]",
          { type: "literal", value: "[kp_C]", description: "\"[kp_C]\"" },
          function(u) {return {"value": 1, "units": {"[kp_C]": 1}, "metadata": {"[kp_C]":{"isBase":false,"CODE":"[KP_C]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of centesimal korsakovian series"],"printSymbols":["C"],"properties":["homeopathic potency (Korsakov)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[hd_i]",
          { type: "literal", value: "[hd_i]", description: "\"[hd_i]\"" },
          function(u) {return {"value": 1, "units": {"[hd_i]": 1}, "metadata": {"[hd_i]":{"isBase":false,"CODE":"[HD_I]","isMetric":"no","class":"intcust","names":["hand"],"printSymbols":["hd"],"properties":["height of horses"],"values":[{"printable":"4","numeric":4}]}}};},
          "[kp_M]",
          { type: "literal", value: "[kp_M]", description: "\"[kp_M]\"" },
          function(u) {return {"value": 1, "units": {"[kp_M]": 1}, "metadata": {"[kp_M]":{"isBase":false,"CODE":"[KP_M]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of millesimal korsakovian series"],"printSymbols":["M"],"properties":["homeopathic potency (Korsakov)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[kp_Q]",
          { type: "literal", value: "[kp_Q]", description: "\"[kp_Q]\"" },
          function(u) {return {"value": 1, "units": {"[kp_Q]": 1}, "metadata": {"[kp_Q]":{"isBase":false,"CODE":"[KP_Q]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of quintamillesimal korsakovian series"],"printSymbols":["Q"],"properties":["homeopathic potency (Korsakov)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[cr_i]",
          { type: "literal", value: "[cr_i]", description: "\"[cr_i]\"" },
          function(u) {return {"value": 1, "units": {"[cr_i]": 1}, "metadata": {"[cr_i]":{"isBase":false,"CODE":"[CR_I]","isMetric":"no","class":"intcust","names":["cord"],"properties":["volume"],"values":[{"printable":"128","numeric":128}]}}};},
          "[bf_i]",
          { type: "literal", value: "[bf_i]", description: "\"[bf_i]\"" },
          function(u) {return {"value": 1, "units": {"[bf_i]": 1}, "metadata": {"[bf_i]":{"isBase":false,"CODE":"[BF_I]","isMetric":"no","class":"intcust","names":["board foot"],"properties":["volume"],"values":[{"printable":"144","numeric":144}]}}};},
          "[kn_i]",
          { type: "literal", value: "[kn_i]", description: "\"[kn_i]\"" },
          function(u) {return {"value": 1, "units": {"[kn_i]": 1}, "metadata": {"[kn_i]":{"isBase":false,"CODE":"[KN_I]","isMetric":"no","class":"intcust","names":["knot"],"printSymbols":["knot"],"properties":["velocity"],"values":[{"printable":"1","numeric":1}]}}};},
          "[mu_0]",
          { type: "literal", value: "[mu_0]", description: "\"[mu_0]\"" },
          function(u) {return {"value": 1, "units": {"[mu_0]": 1}, "metadata": {"[mu_0]":{"isBase":false,"CODE":"[MU_0]","isMetric":"yes","class":"const","names":["permeability of vacuum"],"printSymbols":["<i>&#956;<sub>\n               <r>0</r>\n            </sub>\n         </i>"],"properties":["magnetic permeability"],"values":[{"printable":"1","numeric":1}]}}};},
          "[mi_i]",
          { type: "literal", value: "[mi_i]", description: "\"[mi_i]\"" },
          function(u) {return {"value": 1, "units": {"[mi_i]": 1}, "metadata": {"[mi_i]":{"isBase":false,"CODE":"[MI_I]","isMetric":"no","class":"intcust","names":["statute mile"],"printSymbols":["mi"],"properties":["length"],"values":[{"printable":"5280","numeric":5280}]}}};},
          "[yd_i]",
          { type: "literal", value: "[yd_i]", description: "\"[yd_i]\"" },
          function(u) {return {"value": 1, "units": {"[yd_i]": 1}, "metadata": {"[yd_i]":{"isBase":false,"CODE":"[YD_I]","isMetric":"no","class":"intcust","names":["yard"],"printSymbols":["yd"],"properties":["length"],"values":[{"printable":"3","numeric":3}]}}};},
          "[kp_X]",
          { type: "literal", value: "[kp_X]", description: "\"[kp_X]\"" },
          function(u) {return {"value": 1, "units": {"[kp_X]": 1}, "metadata": {"[kp_X]":{"isBase":false,"CODE":"[KP_X]","isMetric":"no","isArbitrary":"yes","class":"clinical","names":["homeopathic potency of decimal korsakovian series"],"printSymbols":["X"],"properties":["homeopathic potency (Korsakov)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[in_i]",
          { type: "literal", value: "[in_i]", description: "\"[in_i]\"" },
          function(u) {return {"value": 1, "units": {"[in_i]": 1}, "metadata": {"[in_i]":{"isBase":false,"CODE":"[IN_I]","isMetric":"no","class":"intcust","names":["inch"],"printSymbols":["in"],"properties":["length"],"values":[{"printable":"2.54","numeric":2.54}]}}};},
          "[diop]",
          { type: "literal", value: "[diop]", description: "\"[diop]\"" },
          function(u) {return {"value": 1, "units": {"[diop]": 1}, "metadata": {"[diop]":{"isBase":false,"CODE":"[DIOP]","isMetric":"no","class":"clinical","names":["diopter"],"printSymbols":["dpt"],"properties":["refraction of a lens"],"values":[{"printable":"1","numeric":1}]}}};},
          "cal_IT",
          { type: "literal", value: "cal_IT", description: "\"cal_IT\"" },
          function(u) {return {"value": 1, "units": {"cal_IT": 1}, "metadata": {"cal_IT":{"isBase":false,"CODE":"CAL_IT","isMetric":"yes","class":"heat","names":["international table calorie"],"printSymbols":["cal<sub>IT</sub>"],"properties":["energy"],"values":[{"printable":"4.1868","numeric":4.1868}]}}};},
          "cal_th",
          { type: "literal", value: "cal_th", description: "\"cal_th\"" },
          function(u) {return {"value": 1, "units": {"cal_th": 1}, "metadata": {"cal_th":{"isBase":false,"CODE":"CAL_TH","isMetric":"yes","class":"heat","names":["thermochemical calorie"],"printSymbols":["cal<sub>th</sub>"],"properties":["energy"],"values":[{"printable":"4.184","numeric":4.184}]}}};},
          "m[H2O]",
          { type: "literal", value: "m[H2O]", description: "\"m[H2O]\"" },
          function(u) {return {"value": 1, "units": {"m[H2O]": 1}, "metadata": {"m[H2O]":{"isBase":false,"CODE":"M[H2O]","isMetric":"yes","class":"clinical","names":["meter of water column"],"printSymbols":["m&#160;H<sub>\n            <r>2</r>\n         </sub>O"],"properties":["pressure"],"values":[{"printable":"9.80665","numeric":9.80665}]}}};},
          "[ka'U]",
          { type: "literal", value: "[ka'U]", description: "\"[ka'U]\"" },
          function(u) {return {"value": 1, "units": {"[ka'U]": 1}, "metadata": {"[ka'U]":{"isBase":false,"CODE":"[KA'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["King-Armstrong unit"],"properties":["biologic activity of phosphatase"],"values":[{"printable":"1","numeric":1}]}}};},
          "B[SPL]",
          { type: "literal", value: "B[SPL]", description: "\"B[SPL]\"" },
          function(u) {return {"value": 1, "units": {"B[SPL]": 1}, "metadata": {"B[SPL]":{"isBase":false,"CODE":"B[SPL]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel sound pressure"],"printSymbols":["B(SPL)"],"properties":["pressure level"],"values":[{"printable":"<function name=\"lgTimes2\" value=\"2\" Unit=\"10*-5.Pa\"/>","numeric":null}]}}};},
          "[tb'U]",
          { type: "literal", value: "[tb'U]", description: "\"[tb'U]\"" },
          function(u) {return {"value": 1, "units": {"[tb'U]": 1}, "metadata": {"[tb'U]":{"isBase":false,"CODE":"[TB'U]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["tuberculin unit"],"properties":["biologic activity of tuberculin"],"values":[{"printable":"1","numeric":1}]}}};},
          "[degR]",
          { type: "literal", value: "[degR]", description: "\"[degR]\"" },
          function(u) {return {"value": 1, "units": {"[degR]": 1}, "metadata": {"[degR]":{"isBase":false,"CODE":"[degR]","isMetric":"no","class":"heat","names":["degree Rankine"],"printSymbols":["&#176;R"],"properties":["temperature"],"values":[{"printable":"5","numeric":5}]}}};},
          "[degF]",
          { type: "literal", value: "[degF]", description: "\"[degF]\"" },
          function(u) {return {"value": 1, "units": {"[degF]": 1}, "metadata": {"[degF]":{"isBase":false,"CODE":"[DEGF]","isMetric":"no","isSpecial":"yes","class":"heat","names":["degree Fahrenheit"],"printSymbols":["&#176;F"],"properties":["temperature"],"values":[{"printable":"<function name=\"degF\" value=\"5\" Unit=\"K/9\"/>","numeric":null}]}}};},
          "[pptr]",
          { type: "literal", value: "[pptr]", description: "\"[pptr]\"" },
          function(u) {return {"value": 1, "units": {"[pptr]": 1}, "metadata": {"[pptr]":{"isBase":false,"CODE":"[PPTR]","isMetric":"no","class":"dimless","names":["parts per trillion"],"printSymbols":["pptr"],"properties":["fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "[ppth]",
          { type: "literal", value: "[ppth]", description: "\"[ppth]\"" },
          function(u) {return {"value": 1, "units": {"[ppth]": 1}, "metadata": {"[ppth]":{"isBase":false,"CODE":"[PPTH]","isMetric":"no","class":"dimless","names":["parts per thousand"],"printSymbols":["ppth"],"properties":["fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "[oz_m]",
          { type: "literal", value: "[oz_m]", description: "\"[oz_m]\"" },
          function(u) {return {"value": 1, "units": {"[oz_m]": 1}, "metadata": {"[oz_m]":{"isBase":false,"CODE":"[OZ_M]","isMetric":"no","class":"apoth","names":["metric ounce"],"properties":["mass"],"values":[{"printable":"28","numeric":28}]}}};},
          "[pied]",
          { type: "literal", value: "[pied]", description: "\"[pied]\"" },
          function(u) {return {"value": 1, "units": {"[pied]": 1}, "metadata": {"[pied]":{"isBase":false,"CODE":"[PIED]","isMetric":"no","class":"typeset","names":["pied","French foot"],"properties":["length"],"values":[{"printable":"32.48","numeric":32.48}]}}};},
          "[ppm]",
          { type: "literal", value: "[ppm]", description: "\"[ppm]\"" },
          function(u) {return {"value": 1, "units": {"[ppm]": 1}, "metadata": {"[ppm]":{"isBase":false,"CODE":"[PPM]","isMetric":"no","class":"dimless","names":["parts per million"],"printSymbols":["ppm"],"properties":["fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "[ppb]",
          { type: "literal", value: "[ppb]", description: "\"[ppb]\"" },
          function(u) {return {"value": 1, "units": {"[ppb]": 1}, "metadata": {"[ppb]":{"isBase":false,"CODE":"[PPB]","isMetric":"no","class":"dimless","names":["parts per billion"],"printSymbols":["ppb"],"properties":["fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "bit_s",
          { type: "literal", value: "bit_s", description: "\"bit_s\"" },
          function(u) {return {"value": 1, "units": {"bit_s": 1}, "metadata": {"bit_s":{"isBase":false,"CODE":"BIT_S","isMetric":"no","isSpecial":"yes","class":"infotech","names":["bit"],"printSymbols":["bit<sub>s</sub>"],"properties":["amount of information"],"values":[{"printable":"<function name=\"ld\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "[PNU]",
          { type: "literal", value: "[PNU]", description: "\"[PNU]\"" },
          function(u) {return {"value": 1, "units": {"[PNU]": 1}, "metadata": {"[PNU]":{"isBase":false,"CODE":"[PNU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["protein nitrogen unit"],"printSymbols":["PNU"],"properties":["procedure defined amount of a protein substance"],"values":[{"printable":"1","numeric":1}]}}};},
          "[psi]",
          { type: "literal", value: "[psi]", description: "\"[psi]\"" },
          function(u) {return {"value": 1, "units": {"[psi]": 1}, "metadata": {"[psi]":{"isBase":false,"CODE":"[PSI]","isMetric":"no","class":"misc","names":["pound per sqare inch"],"printSymbols":["psi"],"properties":["pressure"],"values":[{"printable":"1","numeric":1}]}}};},
          "[BAU]",
          { type: "literal", value: "[BAU]", description: "\"[BAU]\"" },
          function(u) {return {"value": 1, "units": {"[BAU]": 1}, "metadata": {"[BAU]":{"isBase":false,"CODE":"[BAU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["bioequivalent allergen unit"],"printSymbols":["BAU"],"properties":["amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Cal]",
          { type: "literal", value: "[Cal]", description: "\"[Cal]\"" },
          function(u) {return {"value": 1, "units": {"[Cal]": 1}, "metadata": {"[Cal]":{"isBase":false,"CODE":"[CAL]","isMetric":"no","class":"heat","names":["nutrition label Calories"],"printSymbols":["Cal"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "B[mV]",
          { type: "literal", value: "B[mV]", description: "\"B[mV]\"" },
          function(u) {return {"value": 1, "units": {"B[mV]": 1}, "metadata": {"B[mV]":{"isBase":false,"CODE":"B[MV]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel millivolt"],"printSymbols":["B(mV)"],"properties":["electric potential level"],"values":[{"printable":"<function name=\"lgTimes2\" value=\"1\" Unit=\"mV\"/>","numeric":null}]}}};},
          "B[uV]",
          { type: "literal", value: "B[uV]", description: "\"B[uV]\"" },
          function(u) {return {"value": 1, "units": {"B[uV]": 1}, "metadata": {"B[uV]":{"isBase":false,"CODE":"B[UV]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel microvolt"],"printSymbols":["B(&#956;V)"],"properties":["electric potential level"],"values":[{"printable":"<function name=\"lgTimes2\" value=\"1\" Unit=\"uV\"/>","numeric":null}]}}};},
          "[CFU]",
          { type: "literal", value: "[CFU]", description: "\"[CFU]\"" },
          function(u) {return {"value": 1, "units": {"[CFU]": 1}, "metadata": {"[CFU]":{"isBase":false,"CODE":"[CFU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["colony forming units"],"printSymbols":["CFU"],"properties":["amount of a proliferating organism"],"values":[{"printable":"1","numeric":1}]}}};},
          "[FFU]",
          { type: "literal", value: "[FFU]", description: "\"[FFU]\"" },
          function(u) {return {"value": 1, "units": {"[FFU]": 1}, "metadata": {"[FFU]":{"isBase":false,"CODE":"[FFU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["focus forming units"],"printSymbols":["FFU"],"properties":["amount of an infectious agent"],"values":[{"printable":"1","numeric":1}]}}};},
          "B[kW]",
          { type: "literal", value: "B[kW]", description: "\"B[kW]\"" },
          function(u) {return {"value": 1, "units": {"B[kW]": 1}, "metadata": {"B[kW]":{"isBase":false,"CODE":"B[KW]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel kilowatt"],"printSymbols":["B(kW)"],"properties":["power level"],"values":[{"printable":"<function name=\"lg\" value=\"1\" Unit=\"kW\"/>","numeric":null}]}}};},
          "[PFU]",
          { type: "literal", value: "[PFU]", description: "\"[PFU]\"" },
          function(u) {return {"value": 1, "units": {"[PFU]": 1}, "metadata": {"[PFU]":{"isBase":false,"CODE":"[PFU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["plaque forming units"],"printSymbols":["PFU"],"properties":["amount of an infectious agent"],"values":[{"printable":"1","numeric":1}]}}};},
          "cal_m",
          { type: "literal", value: "cal_m", description: "\"cal_m\"" },
          function(u) {return {"value": 1, "units": {"cal_m": 1}, "metadata": {"cal_m":{"isBase":false,"CODE":"CAL_M","isMetric":"yes","class":"heat","names":["mean calorie"],"printSymbols":["cal<sub>m</sub>"],"properties":["energy"],"values":[{"printable":"4.19002","numeric":4.19002}]}}};},
          "[ELU]",
          { type: "literal", value: "[ELU]", description: "\"[ELU]\"" },
          function(u) {return {"value": 1, "units": {"[ELU]": 1}, "metadata": {"[ELU]":{"isBase":false,"CODE":"[ELU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["ELISA unit"],"printSymbols":[""],"properties":["arbitrary ELISA unit"],"values":[{"printable":"1","numeric":1}]}}};},
          "[FEU]",
          { type: "literal", value: "[FEU]", description: "\"[FEU]\"" },
          function(u) {return {"value": 1, "units": {"[FEU]": 1}, "metadata": {"[FEU]":{"isBase":false,"CODE":"[FEU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["fibrinogen equivalent unit"],"printSymbols":[""],"properties":["amount of fibrinogen broken down into the measured d-dimers"],"values":[{"printable":"1","numeric":1}]}}};},
          "[PRU]",
          { type: "literal", value: "[PRU]", description: "\"[PRU]\"" },
          function(u) {return {"value": 1, "units": {"[PRU]": 1}, "metadata": {"[PRU]":{"isBase":false,"CODE":"[PRU]","isMetric":"no","class":"clinical","names":["peripheral vascular resistance unit"],"printSymbols":["P.R.U."],"properties":["fluid resistance"],"values":[{"printable":"1","numeric":1}]}}};},
          "[m_e]",
          { type: "literal", value: "[m_e]", description: "\"[m_e]\"" },
          function(u) {return {"value": 1, "units": {"[m_e]": 1}, "metadata": {"[m_e]":{"isBase":false,"CODE":"[M_E]","isMetric":"yes","class":"const","names":["electron mass"],"printSymbols":["<i>m<sub>\n               <r>e</r>\n            </sub>\n         </i>"],"properties":["mass"],"values":[{"printable":"9.1093897 &#215; 10<sup>-28</sup>","numeric":9.1093897e-28}]}}};},
          "[m_p]",
          { type: "literal", value: "[m_p]", description: "\"[m_p]\"" },
          function(u) {return {"value": 1, "units": {"[m_p]": 1}, "metadata": {"[m_p]":{"isBase":false,"CODE":"[M_P]","isMetric":"yes","class":"const","names":["proton mass"],"printSymbols":["<i>m<sub>\n               <r>p</r>\n            </sub>\n         </i>"],"properties":["mass"],"values":[{"printable":"1.6726231 &#215; 10<sup>-24</sup>","numeric":1.6726231e-24}]}}};},
          "m[Hg]",
          { type: "literal", value: "m[Hg]", description: "\"m[Hg]\"" },
          function(u) {return {"value": 1, "units": {"m[Hg]": 1}, "metadata": {"m[Hg]":{"isBase":false,"CODE":"M[HG]","isMetric":"yes","class":"clinical","names":["meter of mercury column"],"printSymbols":["m&#160;Hg"],"properties":["pressure"],"values":[{"printable":"133.3220","numeric":133.322}]}}};},
          "[pca]",
          { type: "literal", value: "[pca]", description: "\"[pca]\"" },
          function(u) {return {"value": 1, "units": {"[pca]": 1}, "metadata": {"[pca]":{"isBase":false,"CODE":"[PCA]","isMetric":"no","class":"typeset","names":["pica"],"properties":["length"],"values":[{"printable":"12","numeric":12}]}}};},
          "[pnt]",
          { type: "literal", value: "[pnt]", description: "\"[pnt]\"" },
          function(u) {return {"value": 1, "units": {"[pnt]": 1}, "metadata": {"[pnt]":{"isBase":false,"CODE":"[PNT]","isMetric":"no","class":"typeset","names":["point"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[lne]",
          { type: "literal", value: "[lne]", description: "\"[lne]\"" },
          function(u) {return {"value": 1, "units": {"[lne]": 1}, "metadata": {"[lne]":{"isBase":false,"CODE":"[LNE]","isMetric":"no","class":"typeset","names":["line"],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[LPF]",
          { type: "literal", value: "[LPF]", description: "\"[LPF]\"" },
          function(u) {return {"value": 1, "units": {"[LPF]": 1}, "metadata": {"[LPF]":{"isBase":false,"CODE":"[LPF]","isMetric":"no","class":"chemical","names":["low power field"],"printSymbols":["LPF"],"properties":["view area in microscope"],"values":[{"printable":"100","numeric":100}]}}};},
          "[den]",
          { type: "literal", value: "[den]", description: "\"[den]\"" },
          function(u) {return {"value": 1, "units": {"[den]": 1}, "metadata": {"[den]":{"isBase":false,"CODE":"[DEN]","isMetric":"no","class":"heat","names":["Denier"],"printSymbols":["den"],"properties":["linear mass density (of textile thread)"],"values":[{"printable":"1","numeric":1}]}}};},
          "[sct]",
          { type: "literal", value: "[sct]", description: "\"[sct]\"" },
          function(u) {return {"value": 1, "units": {"[sct]": 1}, "metadata": {"[sct]":{"isBase":false,"CODE":"[SCT]","isMetric":"no","class":"us-lengths","names":["section"],"properties":["area"],"values":[{"printable":"1","numeric":1}]}}};},
          "[twp]",
          { type: "literal", value: "[twp]", description: "\"[twp]\"" },
          function(u) {return {"value": 1, "units": {"[twp]": 1}, "metadata": {"[twp]":{"isBase":false,"CODE":"[TWP]","isMetric":"no","class":"us-lengths","names":["township"],"properties":["area"],"values":[{"printable":"36","numeric":36}]}}};},
          "[Btu]",
          { type: "literal", value: "[Btu]", description: "\"[Btu]\"" },
          function(u) {return {"value": 1, "units": {"[Btu]": 1}, "metadata": {"[Btu]":{"isBase":false,"CODE":"[BTU]","isMetric":"no","class":"heat","names":["British thermal unit"],"printSymbols":["btu"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "[MET]",
          { type: "literal", value: "[MET]", description: "\"[MET]\"" },
          function(u) {return {"value": 1, "units": {"[MET]": 1}, "metadata": {"[MET]":{"isBase":false,"CODE":"[MET]","isMetric":"no","class":"clinical","names":["metabolic equivalent"],"printSymbols":["MET"],"properties":["metabolic cost of physical activity"],"values":[{"printable":"3.5","numeric":3.5}]}}};},
          "[HPF]",
          { type: "literal", value: "[HPF]", description: "\"[HPF]\"" },
          function(u) {return {"value": 1, "units": {"[HPF]": 1}, "metadata": {"[HPF]":{"isBase":false,"CODE":"[HPF]","isMetric":"no","class":"chemical","names":["high power field"],"printSymbols":["HPF"],"properties":["view area in microscope"],"values":[{"printable":"1","numeric":1}]}}};},
          "[drp]",
          { type: "literal", value: "[drp]", description: "\"[drp]\"" },
          function(u) {return {"value": 1, "units": {"[drp]": 1}, "metadata": {"[drp]":{"isBase":false,"CODE":"[DRP]","isMetric":"no","class":"clinical","names":["drop"],"printSymbols":["drp"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "[AU]",
          { type: "literal", value: "[AU]", description: "\"[AU]\"" },
          function(u) {return {"value": 1, "units": {"[AU]": 1}, "metadata": {"[AU]":{"isBase":false,"CODE":"[AU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["allergen unit"],"printSymbols":["AU"],"properties":["procedure defined amount of an allergen using some reference standard"],"values":[{"printable":"1","numeric":1}]}}};},
          "[IU]",
          { type: "literal", value: "[IU]", description: "\"[IU]\"" },
          function(u) {return {"value": 1, "units": {"[IU]": 1}, "metadata": {"[IU]":{"isBase":false,"CODE":"[IU]","isMetric":"yes","isArbitrary":"yes","class":"chemical","names":["international unit"],"printSymbols":["i.U."],"properties":["arbitrary"],"values":[{"printable":"1","numeric":1}]}}};},
          "mo_s",
          { type: "literal", value: "mo_s", description: "\"mo_s\"" },
          function(u) {return {"value": 1, "units": {"mo_s": 1}, "metadata": {"mo_s":{"isBase":false,"CODE":"MO_S","isMetric":"no","class":"iso1000","names":["synodal month"],"printSymbols":["mo<sub>s</sub>"],"properties":["time"],"values":[{"printable":"29.53059","numeric":29.53059}]}}};},
          "[gr]",
          { type: "literal", value: "[gr]", description: "\"[gr]\"" },
          function(u) {return {"value": 1, "units": {"[gr]": 1}, "metadata": {"[gr]":{"isBase":false,"CODE":"[GR]","isMetric":"no","class":"avoirdupois","names":["grain"],"properties":["mass"],"values":[{"printable":"64.79891","numeric":64.79891}]}}};},
          "circ",
          { type: "literal", value: "circ", description: "\"circ\"" },
          function(u) {return {"value": 1, "units": {"circ": 1}, "metadata": {"circ":{"isBase":false,"CODE":"CIRC","isMetric":"no","class":"misc","names":["circle"],"printSymbols":["circ"],"properties":["plane angle"],"values":[{"printable":"2","numeric":2}]}}};},
          "[pi]",
          { type: "literal", value: "[pi]", description: "\"[pi]\"" },
          function(u) {return {"value": 1, "units": {"[pi]": 1}, "metadata": {"[pi]":{"isBase":false,"CODE":"[PI]","isMetric":"no","class":"dimless","names":["the number pi"],"printSymbols":["&#960;"],"properties":["number"],"values":[{"printable":"&#960;","numeric":3.141592653589793}]}}};},
          "[EU]",
          { type: "literal", value: "[EU]", description: "\"[EU]\"" },
          function(u) {return {"value": 1, "units": {"[EU]": 1}, "metadata": {"[EU]":{"isBase":false,"CODE":"[EU]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Ehrlich unit"],"printSymbols":[""],"properties":["Ehrlich unit"],"values":[{"printable":"1","numeric":1}]}}};},
          "[Lf]",
          { type: "literal", value: "[Lf]", description: "\"[Lf]\"" },
          function(u) {return {"value": 1, "units": {"[Lf]": 1}, "metadata": {"[Lf]":{"isBase":false,"CODE":"[LF]","isMetric":"no","isArbitrary":"yes","class":"chemical","names":["Limit of flocculation"],"printSymbols":["Lf"],"properties":["procedure defined amount of an antigen substance"],"values":[{"printable":"1","numeric":1}]}}};},
          "mo_j",
          { type: "literal", value: "mo_j", description: "\"mo_j\"" },
          function(u) {return {"value": 1, "units": {"mo_j": 1}, "metadata": {"mo_j":{"isBase":false,"CODE":"MO_J","isMetric":"no","class":"iso1000","names":["mean Julian month"],"printSymbols":["mo<sub>j</sub>"],"properties":["time"],"values":[{"printable":"1","numeric":1}]}}};},
          "B[W]",
          { type: "literal", value: "B[W]", description: "\"B[W]\"" },
          function(u) {return {"value": 1, "units": {"B[W]": 1}, "metadata": {"B[W]":{"isBase":false,"CODE":"B[W]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel watt"],"printSymbols":["B(W)"],"properties":["power level"],"values":[{"printable":"<function name=\"lg\" value=\"1\" Unit=\"W\"/>","numeric":null}]}}};},
          "B[V]",
          { type: "literal", value: "B[V]", description: "\"B[V]\"" },
          function(u) {return {"value": 1, "units": {"B[V]": 1}, "metadata": {"B[V]":{"isBase":false,"CODE":"B[V]","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel volt"],"printSymbols":["B(V)"],"properties":["electric potential level"],"values":[{"printable":"<function name=\"lgTimes2\" value=\"1\" Unit=\"V\"/>","numeric":null}]}}};},
          "mo_g",
          { type: "literal", value: "mo_g", description: "\"mo_g\"" },
          function(u) {return {"value": 1, "units": {"mo_g": 1}, "metadata": {"mo_g":{"isBase":false,"CODE":"MO_G","isMetric":"no","class":"iso1000","names":["mean Gregorian month"],"printSymbols":["mo<sub>g</sub>"],"properties":["time"],"values":[{"printable":"1","numeric":1}]}}};},
          "[iU]",
          { type: "literal", value: "[iU]", description: "\"[iU]\"" },
          function(u) {return {"value": 1, "units": {"[iU]": 1}, "metadata": {"[iU]":{"isBase":false,"CODE":"[IU]","isMetric":"yes","isArbitrary":"yes","class":"chemical","names":["international unit"],"printSymbols":["IU"],"properties":["arbitrary"],"values":[{"printable":"1","numeric":1}]}}};},
          "[HP]",
          { type: "literal", value: "[HP]", description: "\"[HP]\"" },
          function(u) {return {"value": 1, "units": {"[HP]": 1}, "metadata": {"[HP]":{"isBase":false,"CODE":"[HP]","isMetric":"no","class":"heat","names":["horsepower"],"properties":["power"],"values":[{"printable":"550","numeric":550}]}}};},
          "[Ch]",
          { type: "literal", value: "[Ch]", description: "\"[Ch]\"" },
          function(u) {return {"value": 1, "units": {"[Ch]": 1}, "metadata": {"[Ch]":{"isBase":false,"CODE":"[CH]","isMetric":"no","class":"clinical","names":["Charrière","french"],"printSymbols":["Ch"],"properties":["gauge of catheters"],"values":[{"printable":"1","numeric":1}]}}};},
          "[ly]",
          { type: "literal", value: "[ly]", description: "\"[ly]\"" },
          function(u) {return {"value": 1, "units": {"[ly]": 1}, "metadata": {"[ly]":{"isBase":false,"CODE":"[LY]","isMetric":"yes","class":"const","names":["light-year"],"printSymbols":["l.y."],"properties":["length"],"values":[{"printable":"1","numeric":1}]}}};},
          "[pH]",
          { type: "literal", value: "[pH]", description: "\"[pH]\"" },
          function(u) {return {"value": 1, "units": {"[pH]": 1}, "metadata": {"[pH]":{"isBase":false,"CODE":"[PH]","isMetric":"no","isSpecial":"yes","class":"chemical","names":["pH"],"printSymbols":["pH"],"properties":["acidity"],"values":[{"printable":"<function name=\"pH\" value=\"1\" Unit=\"mol/l\"/>","numeric":null}]}}};},
          "a_j",
          { type: "literal", value: "a_j", description: "\"a_j\"" },
          function(u) {return {"value": 1, "units": {"a_j": 1}, "metadata": {"a_j":{"isBase":false,"CODE":"ANN_J","isMetric":"no","class":"iso1000","names":["mean Julian year"],"printSymbols":["a<sub>j</sub>"],"properties":["time"],"values":[{"printable":"365.25","numeric":365.25}]}}};},
          "rad",
          { type: "literal", value: "rad", description: "\"rad\"" },
          function(u) {return {"value": 1, "units": {"rad": 1}, "metadata": {"rad":{"isBase":true,"CODE":"RAD","dim":"A","names":["radian"],"printSymbols":["rad"],"properties":["plane angle"]}}};},
          "a_t",
          { type: "literal", value: "a_t", description: "\"a_t\"" },
          function(u) {return {"value": 1, "units": {"a_t": 1}, "metadata": {"a_t":{"isBase":false,"CODE":"ANN_T","isMetric":"no","class":"iso1000","names":["tropical year"],"printSymbols":["a<sub>t</sub>"],"properties":["time"],"values":[{"printable":"365.24219","numeric":365.24219}]}}};},
          "Ohm",
          { type: "literal", value: "Ohm", description: "\"Ohm\"" },
          function(u) {return {"value": 1, "units": {"Ohm": 1}, "metadata": {"Ohm":{"isBase":false,"CODE":"OHM","isMetric":"yes","class":"si","names":["Ohm"],"printSymbols":["&#937;"],"properties":["electric resistance"],"values":[{"printable":"1","numeric":1}]}}};},
          "sph",
          { type: "literal", value: "sph", description: "\"sph\"" },
          function(u) {return {"value": 1, "units": {"sph": 1}, "metadata": {"sph":{"isBase":false,"CODE":"SPH","isMetric":"no","class":"misc","names":["spere"],"printSymbols":["sph"],"properties":["solid angle"],"values":[{"printable":"4","numeric":4}]}}};},
          "bit",
          { type: "literal", value: "bit", description: "\"bit\"" },
          function(u) {return {"value": 1, "units": {"bit": 1}, "metadata": {"bit":{"isBase":false,"CODE":"BIT","isMetric":"yes","class":"infotech","names":["bit"],"printSymbols":["bit"],"properties":["amount of information"],"values":[{"printable":"1","numeric":1}]}}};},
          "mho",
          { type: "literal", value: "mho", description: "\"mho\"" },
          function(u) {return {"value": 1, "units": {"mho": 1}, "metadata": {"mho":{"isBase":false,"CODE":"MHO","isMetric":"yes","class":"misc","names":["mho"],"printSymbols":["mho"],"properties":["electric conductance"],"values":[{"printable":"1","numeric":1}]}}};},
          "min",
          { type: "literal", value: "min", description: "\"min\"" },
          function(u) {return {"value": 1, "units": {"min": 1}, "metadata": {"min":{"isBase":false,"CODE":"MIN","isMetric":"no","class":"iso1000","names":["minute"],"printSymbols":["min"],"properties":["time"],"values":[{"printable":"60","numeric":60}]}}};},
          "mol",
          { type: "literal", value: "mol", description: "\"mol\"" },
          function(u) {return {"value": 1, "units": {"mol": 1}, "metadata": {"mol":{"isBase":false,"CODE":"MOL","isMetric":"yes","class":"si","names":["mole"],"printSymbols":["mol"],"properties":["amount of substance"],"values":[{"printable":"6.0221367","numeric":6.0221367}]}}};},
          "deg",
          { type: "literal", value: "deg", description: "\"deg\"" },
          function(u) {return {"value": 1, "units": {"deg": 1}, "metadata": {"deg":{"isBase":false,"CODE":"DEG","isMetric":"no","class":"iso1000","names":["degree"],"printSymbols":["&#176;"],"properties":["plane angle"],"values":[{"printable":"2","numeric":2}]}}};},
          "gon",
          { type: "literal", value: "gon", description: "\"gon\"" },
          function(u) {return {"value": 1, "units": {"gon": 1}, "metadata": {"gon":{"isBase":false,"CODE":"GON","isMetric":"no","class":"iso1000","names":["gon","grade"],"printSymbols":["&#9633;<sup>g</sup>"],"properties":["plane angle"],"values":[{"printable":"0.9","numeric":0.9}]}}};},
          "Cel",
          { type: "literal", value: "Cel", description: "\"Cel\"" },
          function(u) {return {"value": 1, "units": {"Cel": 1}, "metadata": {"Cel":{"isBase":false,"CODE":"CEL","isMetric":"yes","isSpecial":"yes","class":"si","names":["degree Celsius"],"printSymbols":["&#176;C"],"properties":["temperature"],"values":[{"printable":"<function name=\"Cel\" value=\"1\" Unit=\"K\"/>","numeric":null}]}}};},
          "kat",
          { type: "literal", value: "kat", description: "\"kat\"" },
          function(u) {return {"value": 1, "units": {"kat": 1}, "metadata": {"kat":{"isBase":false,"CODE":"KAT","isMetric":"yes","class":"chemical","names":["katal"],"printSymbols":["kat"],"properties":["catalytic activity"],"values":[{"printable":"1","numeric":1}]}}};},
          "att",
          { type: "literal", value: "att", description: "\"att\"" },
          function(u) {return {"value": 1, "units": {"att": 1}, "metadata": {"att":{"isBase":false,"CODE":"ATT","isMetric":"no","class":"misc","names":["technical atmosphere"],"printSymbols":["at"],"properties":["pressure"],"values":[{"printable":"1","numeric":1}]}}};},
          "osm",
          { type: "literal", value: "osm", description: "\"osm\"" },
          function(u) {return {"value": 1, "units": {"osm": 1}, "metadata": {"osm":{"isBase":false,"CODE":"OSM","isMetric":"yes","class":"chemical","names":["osmole"],"printSymbols":["osm"],"properties":["amount of substance (dissolved particles)"],"values":[{"printable":"1","numeric":1}]}}};},
          "tex",
          { type: "literal", value: "tex", description: "\"tex\"" },
          function(u) {return {"value": 1, "units": {"tex": 1}, "metadata": {"tex":{"isBase":false,"CODE":"TEX","isMetric":"yes","class":"heat","names":["tex"],"printSymbols":["tex"],"properties":["linear mass density (of textile thread)"],"values":[{"printable":"1","numeric":1}]}}};},
          "cal",
          { type: "literal", value: "cal", description: "\"cal\"" },
          function(u) {return {"value": 1, "units": {"cal": 1}, "metadata": {"cal":{"isBase":false,"CODE":"CAL","isMetric":"yes","class":"heat","names":["calorie"],"printSymbols":["cal"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "REM",
          { type: "literal", value: "REM", description: "\"REM\"" },
          function(u) {return {"value": 1, "units": {"REM": 1}, "metadata": {"REM":{"isBase":false,"CODE":"[REM]","isMetric":"yes","class":"cgs","names":["radiation equivalent man"],"printSymbols":["REM"],"properties":["dose equivalent"],"values":[{"printable":"1","numeric":1}]}}};},
          "RAD",
          { type: "literal", value: "RAD", description: "\"RAD\"" },
          function(u) {return {"value": 1, "units": {"RAD": 1}, "metadata": {"RAD":{"isBase":false,"CODE":"[RAD]","isMetric":"yes","class":"cgs","names":["radiation absorbed dose"],"printSymbols":["RAD"],"properties":["energy dose"],"values":[{"printable":"100","numeric":100}]}}};},
          "a_g",
          { type: "literal", value: "a_g", description: "\"a_g\"" },
          function(u) {return {"value": 1, "units": {"a_g": 1}, "metadata": {"a_g":{"isBase":false,"CODE":"ANN_G","isMetric":"no","class":"iso1000","names":["mean Gregorian year"],"printSymbols":["a<sub>g</sub>"],"properties":["time"],"values":[{"printable":"365.2425","numeric":365.2425}]}}};},
          "Lmb",
          { type: "literal", value: "Lmb", description: "\"Lmb\"" },
          function(u) {return {"value": 1, "units": {"Lmb": 1}, "metadata": {"Lmb":{"isBase":false,"CODE":"LMB","isMetric":"yes","class":"cgs","names":["Lambert"],"printSymbols":["L"],"properties":["brightness"],"values":[{"printable":"1","numeric":1}]}}};},
          "atm",
          { type: "literal", value: "atm", description: "\"atm\"" },
          function(u) {return {"value": 1, "units": {"atm": 1}, "metadata": {"atm":{"isBase":false,"CODE":"ATM","isMetric":"no","class":"const","names":["standard atmosphere"],"printSymbols":["atm"],"properties":["pressure"],"values":[{"printable":"101325","numeric":101325}]}}};},
          "erg",
          { type: "literal", value: "erg", description: "\"erg\"" },
          function(u) {return {"value": 1, "units": {"erg": 1}, "metadata": {"erg":{"isBase":false,"CODE":"ERG","isMetric":"yes","class":"cgs","names":["erg"],"printSymbols":["erg"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "dyn",
          { type: "literal", value: "dyn", description: "\"dyn\"" },
          function(u) {return {"value": 1, "units": {"dyn": 1}, "metadata": {"dyn":{"isBase":false,"CODE":"DYN","isMetric":"yes","class":"cgs","names":["dyne"],"printSymbols":["dyn"],"properties":["force"],"values":[{"printable":"1","numeric":1}]}}};},
          "Gal",
          { type: "literal", value: "Gal", description: "\"Gal\"" },
          function(u) {return {"value": 1, "units": {"Gal": 1}, "metadata": {"Gal":{"isBase":false,"CODE":"GL","isMetric":"yes","class":"cgs","names":["Gal"],"printSymbols":["Gal"],"properties":["acceleration"],"values":[{"printable":"1","numeric":1}]}}};},
          "10^",
          { type: "literal", value: "10^", description: "\"10^\"" },
          function(u) {return {"value": 1, "units": {"10^": 1}, "metadata": {"10^":{"isBase":false,"CODE":"10^","isMetric":"no","class":"dimless","names":["the number ten for arbitrary powers"],"printSymbols":["10"],"properties":["number"],"values":[{"printable":"10","numeric":10}]}}};},
          "10*",
          { type: "literal", value: "10*", description: "\"10*\"" },
          function(u) {return {"value": 1, "units": {"10*": 1}, "metadata": {"10*":{"isBase":false,"CODE":"10*","isMetric":"no","class":"dimless","names":["the number ten for arbitrary powers"],"printSymbols":["10"],"properties":["number"],"values":[{"printable":"10","numeric":10}]}}};},
          "[S]",
          { type: "literal", value: "[S]", description: "\"[S]\"" },
          function(u) {return {"value": 1, "units": {"[S]": 1}, "metadata": {"[S]":{"isBase":false,"CODE":"[S]","isMetric":"no","class":"chemical","names":["Svedberg unit"],"printSymbols":["S"],"properties":["sedimentation coefficient"],"values":[{"printable":"1","numeric":1}]}}};},
          "[g]",
          { type: "literal", value: "[g]", description: "\"[g]\"" },
          function(u) {return {"value": 1, "units": {"[g]": 1}, "metadata": {"[g]":{"isBase":false,"CODE":"[G]","isMetric":"yes","class":"const","names":["standard acceleration of free fall"],"printSymbols":["<i>g<sub>n</sub>\n         </i>"],"properties":["acceleration"],"values":[{"printable":"9.80665","numeric":9.80665}]}}};},
          "[G]",
          { type: "literal", value: "[G]", description: "\"[G]\"" },
          function(u) {return {"value": 1, "units": {"[G]": 1}, "metadata": {"[G]":{"isBase":false,"CODE":"[GC]","isMetric":"yes","class":"const","names":["Newtonian constant of gravitation"],"printSymbols":["<i>G</i>"],"properties":["(unclassified)"],"values":[{"printable":"6.67259 &#215; 10<sup>-11</sup>","numeric":6.67259e-11}]}}};},
          "[e]",
          { type: "literal", value: "[e]", description: "\"[e]\"" },
          function(u) {return {"value": 1, "units": {"[e]": 1}, "metadata": {"[e]":{"isBase":false,"CODE":"[E]","isMetric":"yes","class":"const","names":["elementary charge"],"printSymbols":["<i>e</i>"],"properties":["electric charge"],"values":[{"printable":"1.60217733 &#215; 10<sup>-19</sup>","numeric":1.60217733e-19}]}}};},
          "[k]",
          { type: "literal", value: "[k]", description: "\"[k]\"" },
          function(u) {return {"value": 1, "units": {"[k]": 1}, "metadata": {"[k]":{"isBase":false,"CODE":"[K]","isMetric":"yes","class":"const","names":["Boltzmann constant"],"printSymbols":["<i>k</i>"],"properties":["(unclassified)"],"values":[{"printable":"1.380658 &#215; 10<sup>-23</sup>","numeric":1.380658e-23}]}}};},
          "[h]",
          { type: "literal", value: "[h]", description: "\"[h]\"" },
          function(u) {return {"value": 1, "units": {"[h]": 1}, "metadata": {"[h]":{"isBase":false,"CODE":"[H]","isMetric":"yes","class":"const","names":["Planck constant"],"printSymbols":["<i>h</i>"],"properties":["action"],"values":[{"printable":"6.6260755 &#215; 10<sup>-24</sup>","numeric":6.6260755e-24}]}}};},
          "[c]",
          { type: "literal", value: "[c]", description: "\"[c]\"" },
          function(u) {return {"value": 1, "units": {"[c]": 1}, "metadata": {"[c]":{"isBase":false,"CODE":"[C]","isMetric":"yes","class":"const","names":["velocity of light"],"printSymbols":["<i>c</i>"],"properties":["velocity"],"values":[{"printable":"299792458","numeric":299792458}]}}};},
          "bar",
          { type: "literal", value: "bar", description: "\"bar\"" },
          function(u) {return {"value": 1, "units": {"bar": 1}, "metadata": {"bar":{"isBase":false,"CODE":"BAR","isMetric":"yes","class":"iso1000","names":["bar"],"printSymbols":["bar"],"properties":["pressure"],"values":[{"printable":"1 &#215; 10<sup>5</sup>","numeric":100000}]}}};},
          "lm",
          { type: "literal", value: "lm", description: "\"lm\"" },
          function(u) {return {"value": 1, "units": {"lm": 1}, "metadata": {"lm":{"isBase":false,"CODE":"LM","isMetric":"yes","class":"si","names":["lumen"],"printSymbols":["lm"],"properties":["luminous flux"],"values":[{"printable":"1","numeric":1}]}}};},
          "Ci",
          { type: "literal", value: "Ci", description: "\"Ci\"" },
          function(u) {return {"value": 1, "units": {"Ci": 1}, "metadata": {"Ci":{"isBase":false,"CODE":"CI","isMetric":"yes","class":"cgs","names":["Curie"],"printSymbols":["Ci"],"properties":["radioactivity"],"values":[{"printable":"3.7 &#215; 10<sup>10</sup>","numeric":37000000000}]}}};},
          "ph",
          { type: "literal", value: "ph", description: "\"ph\"" },
          function(u) {return {"value": 1, "units": {"ph": 1}, "metadata": {"ph":{"isBase":false,"CODE":"PHT","isMetric":"yes","class":"cgs","names":["phot"],"printSymbols":["ph"],"properties":["illuminance"],"values":[{"printable":"1 &#215; 10<sup>-4</sup>","numeric":0.0001}]}}};},
          "cd",
          { type: "literal", value: "cd", description: "\"cd\"" },
          function(u) {return {"value": 1, "units": {"cd": 1}, "metadata": {"cd":{"isBase":true,"CODE":"CD","dim":"F","names":["candela"],"printSymbols":["cd"],"properties":["luminous intensity"]}}};},
          "Ao",
          { type: "literal", value: "Ao", description: "\"Ao\"" },
          function(u) {return {"value": 1, "units": {"Ao": 1}, "metadata": {"Ao":{"isBase":false,"CODE":"AO","isMetric":"no","class":"misc","names":["Ångström"],"printSymbols":["&#197;"],"properties":["length"],"values":[{"printable":"0.1","numeric":0.1}]}}};},
          "Wb",
          { type: "literal", value: "Wb", description: "\"Wb\"" },
          function(u) {return {"value": 1, "units": {"Wb": 1}, "metadata": {"Wb":{"isBase":false,"CODE":"WB","isMetric":"yes","class":"si","names":["Weber"],"printSymbols":["Wb"],"properties":["magentic flux"],"values":[{"printable":"1","numeric":1}]}}};},
          "Gb",
          { type: "literal", value: "Gb", description: "\"Gb\"" },
          function(u) {return {"value": 1, "units": {"Gb": 1}, "metadata": {"Gb":{"isBase":false,"CODE":"GB","isMetric":"yes","class":"cgs","names":["Gilbert"],"printSymbols":["Gb"],"properties":["magnetic tension"],"values":[{"printable":"1","numeric":1}]}}};},
          "Oe",
          { type: "literal", value: "Oe", description: "\"Oe\"" },
          function(u) {return {"value": 1, "units": {"Oe": 1}, "metadata": {"Oe":{"isBase":false,"CODE":"OE","isMetric":"yes","class":"cgs","names":["Oersted"],"printSymbols":["Oe"],"properties":["magnetic field intensity"],"values":[{"printable":"250","numeric":250}]}}};},
          "lx",
          { type: "literal", value: "lx", description: "\"lx\"" },
          function(u) {return {"value": 1, "units": {"lx": 1}, "metadata": {"lx":{"isBase":false,"CODE":"LX","isMetric":"yes","class":"si","names":["lux"],"printSymbols":["lx"],"properties":["illuminance"],"values":[{"printable":"1","numeric":1}]}}};},
          "Mx",
          { type: "literal", value: "Mx", description: "\"Mx\"" },
          function(u) {return {"value": 1, "units": {"Mx": 1}, "metadata": {"Mx":{"isBase":false,"CODE":"MX","isMetric":"yes","class":"cgs","names":["Maxwell"],"printSymbols":["Mx"],"properties":["flux of magnetic induction"],"values":[{"printable":"1 &#215; 10<sup>-8</sup>","numeric":1e-8}]}}};},
          "St",
          { type: "literal", value: "St", description: "\"St\"" },
          function(u) {return {"value": 1, "units": {"St": 1}, "metadata": {"St":{"isBase":false,"CODE":"ST","isMetric":"yes","class":"cgs","names":["Stokes"],"printSymbols":["St"],"properties":["kinematic viscosity"],"values":[{"printable":"1","numeric":1}]}}};},
          "Bi",
          { type: "literal", value: "Bi", description: "\"Bi\"" },
          function(u) {return {"value": 1, "units": {"Bi": 1}, "metadata": {"Bi":{"isBase":false,"CODE":"BI","isMetric":"yes","class":"cgs","names":["Biot"],"printSymbols":["Bi"],"properties":["electric current"],"values":[{"printable":"10","numeric":10}]}}};},
          "Bq",
          { type: "literal", value: "Bq", description: "\"Bq\"" },
          function(u) {return {"value": 1, "units": {"Bq": 1}, "metadata": {"Bq":{"isBase":false,"CODE":"BQ","isMetric":"yes","class":"si","names":["Becquerel"],"printSymbols":["Bq"],"properties":["radioactivity"],"values":[{"printable":"1","numeric":1}]}}};},
          "Np",
          { type: "literal", value: "Np", description: "\"Np\"" },
          function(u) {return {"value": 1, "units": {"Np": 1}, "metadata": {"Np":{"isBase":false,"CODE":"NEP","isMetric":"yes","isSpecial":"yes","class":"levels","names":["neper"],"printSymbols":["Np"],"properties":["level"],"values":[{"printable":"<function name=\"ln\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "AU",
          { type: "literal", value: "AU", description: "\"AU\"" },
          function(u) {return {"value": 1, "units": {"AU": 1}, "metadata": {"AU":{"isBase":false,"CODE":"ASU","isMetric":"no","class":"iso1000","names":["astronomic unit"],"printSymbols":["AU"],"properties":["length"],"values":[{"printable":"149597.870691","numeric":149597.870691}]}}};},
          "mo",
          { type: "literal", value: "mo", description: "\"mo\"" },
          function(u) {return {"value": 1, "units": {"mo": 1}, "metadata": {"mo":{"isBase":false,"CODE":"MO","isMetric":"no","class":"iso1000","names":["month"],"printSymbols":["mo"],"properties":["time"],"values":[{"printable":"1","numeric":1}]}}};},
          "Ky",
          { type: "literal", value: "Ky", description: "\"Ky\"" },
          function(u) {return {"value": 1, "units": {"Ky": 1}, "metadata": {"Ky":{"isBase":false,"CODE":"KY","isMetric":"yes","class":"cgs","names":["Kayser"],"printSymbols":["K"],"properties":["lineic number"],"values":[{"printable":"1","numeric":1}]}}};},
          "gf",
          { type: "literal", value: "gf", description: "\"gf\"" },
          function(u) {return {"value": 1, "units": {"gf": 1}, "metadata": {"gf":{"isBase":false,"CODE":"GF","isMetric":"yes","class":"const","names":["gram-force"],"printSymbols":["gf"],"properties":["force"],"values":[{"printable":"1","numeric":1}]}}};},
          "wk",
          { type: "literal", value: "wk", description: "\"wk\"" },
          function(u) {return {"value": 1, "units": {"wk": 1}, "metadata": {"wk":{"isBase":false,"CODE":"WK","isMetric":"no","class":"iso1000","names":["week"],"printSymbols":["wk"],"properties":["time"],"values":[{"printable":"7","numeric":7}]}}};},
          "Pa",
          { type: "literal", value: "Pa", description: "\"Pa\"" },
          function(u) {return {"value": 1, "units": {"Pa": 1}, "metadata": {"Pa":{"isBase":false,"CODE":"PAL","isMetric":"yes","class":"si","names":["Pascal"],"printSymbols":["Pa"],"properties":["pressure"],"values":[{"printable":"1","numeric":1}]}}};},
          "g%",
          { type: "literal", value: "g%", description: "\"g%\"" },
          function(u) {return {"value": 1, "units": {"g%": 1}, "metadata": {"g%":{"isBase":false,"CODE":"G%","isMetric":"yes","class":"chemical","names":["gram percent"],"printSymbols":["g%"],"properties":["mass concentration"],"values":[{"printable":"1","numeric":1}]}}};},
          "sr",
          { type: "literal", value: "sr", description: "\"sr\"" },
          function(u) {return {"value": 1, "units": {"sr": 1}, "metadata": {"sr":{"isBase":false,"CODE":"SR","isMetric":"yes","class":"si","names":["steradian"],"printSymbols":["sr"],"properties":["solid angle"],"values":[{"printable":"1","numeric":1}]}}};},
          "Bd",
          { type: "literal", value: "Bd", description: "\"Bd\"" },
          function(u) {return {"value": 1, "units": {"Bd": 1}, "metadata": {"Bd":{"isBase":false,"CODE":"BD","isMetric":"yes","class":"infotech","names":["baud"],"printSymbols":["Bd"],"properties":["signal transmission rate"],"values":[{"printable":"1","numeric":1}]}}};},
          "eq",
          { type: "literal", value: "eq", description: "\"eq\"" },
          function(u) {return {"value": 1, "units": {"eq": 1}, "metadata": {"eq":{"isBase":false,"CODE":"EQ","isMetric":"yes","class":"chemical","names":["equivalents"],"printSymbols":["eq"],"properties":["amount of substance"],"values":[{"printable":"1","numeric":1}]}}};},
          "By",
          { type: "literal", value: "By", description: "\"By\"" },
          function(u) {return {"value": 1, "units": {"By": 1}, "metadata": {"By":{"isBase":false,"CODE":"BY","isMetric":"yes","class":"infotech","names":["byte"],"printSymbols":["B"],"properties":["amount of information"],"values":[{"printable":"8","numeric":8}]}}};},
          "Hz",
          { type: "literal", value: "Hz", description: "\"Hz\"" },
          function(u) {return {"value": 1, "units": {"Hz": 1}, "metadata": {"Hz":{"isBase":false,"CODE":"HZ","isMetric":"yes","class":"si","names":["Hertz"],"printSymbols":["Hz"],"properties":["frequency"],"values":[{"printable":"1","numeric":1}]}}};},
          "''",
          { type: "literal", value: "''", description: "\"''\"" },
          function(u) {return {"value": 1, "units": {"''": 1}, "metadata": {"''":{"isBase":false,"CODE":"''","isMetric":"no","class":"iso1000","names":["second"],"printSymbols":["''"],"properties":["plane angle"],"values":[{"printable":"1","numeric":1}]}}};},
          "pc",
          { type: "literal", value: "pc", description: "\"pc\"" },
          function(u) {return {"value": 1, "units": {"pc": 1}, "metadata": {"pc":{"isBase":false,"CODE":"PRS","isMetric":"yes","class":"iso1000","names":["parsec"],"printSymbols":["pc"],"properties":["length"],"values":[{"printable":"3.085678 &#215; 10<sup>16</sup>","numeric":30856780000000000}]}}};},
          "eV",
          { type: "literal", value: "eV", description: "\"eV\"" },
          function(u) {return {"value": 1, "units": {"eV": 1}, "metadata": {"eV":{"isBase":false,"CODE":"EV","isMetric":"yes","class":"iso1000","names":["electronvolt"],"printSymbols":["eV"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "Gy",
          { type: "literal", value: "Gy", description: "\"Gy\"" },
          function(u) {return {"value": 1, "units": {"Gy": 1}, "metadata": {"Gy":{"isBase":false,"CODE":"GY","isMetric":"yes","class":"si","names":["Gray"],"printSymbols":["Gy"],"properties":["energy dose"],"values":[{"printable":"1","numeric":1}]}}};},
          "st",
          { type: "literal", value: "st", description: "\"st\"" },
          function(u) {return {"value": 1, "units": {"st": 1}, "metadata": {"st":{"isBase":false,"CODE":"STR","isMetric":"yes","class":"misc","names":["stere"],"printSymbols":["st"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "Sv",
          { type: "literal", value: "Sv", description: "\"Sv\"" },
          function(u) {return {"value": 1, "units": {"Sv": 1}, "metadata": {"Sv":{"isBase":false,"CODE":"SV","isMetric":"yes","class":"si","names":["Sievert"],"printSymbols":["Sv"],"properties":["dose equivalent"],"values":[{"printable":"1","numeric":1}]}}};},
          "ar",
          { type: "literal", value: "ar", description: "\"ar\"" },
          function(u) {return {"value": 1, "units": {"ar": 1}, "metadata": {"ar":{"isBase":false,"CODE":"AR","isMetric":"yes","class":"iso1000","names":["are"],"printSymbols":["a"],"properties":["area"],"values":[{"printable":"100","numeric":100}]}}};},
          "sb",
          { type: "literal", value: "sb", description: "\"sb\"" },
          function(u) {return {"value": 1, "units": {"sb": 1}, "metadata": {"sb":{"isBase":false,"CODE":"SB","isMetric":"yes","class":"cgs","names":["stilb"],"printSymbols":["sb"],"properties":["lum. intensity density"],"values":[{"printable":"1","numeric":1}]}}};},
          "L",
          { type: "literal", value: "L", description: "\"L\"" },
          function(u) {return {"value": 1, "units": {"L": 1}, "metadata": {"L":{"isBase":false,"isMetric":"yes","class":"iso1000","names":["liter"],"printSymbols":["L"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "t",
          { type: "literal", value: "t", description: "\"t\"" },
          function(u) {return {"value": 1, "units": {"t": 1}, "metadata": {"t":{"isBase":false,"CODE":"TNE","isMetric":"yes","class":"iso1000","names":["tonne"],"printSymbols":["t"],"properties":["mass"],"values":[{"printable":"1 &#215; 10<sup>3</sup>","numeric":1000}]}}};},
          "u",
          { type: "literal", value: "u", description: "\"u\"" },
          function(u) {return {"value": 1, "units": {"u": 1}, "metadata": {"u":{"isBase":false,"CODE":"AMU","isMetric":"yes","class":"iso1000","names":["unified atomic mass unit"],"printSymbols":["u"],"properties":["mass"],"values":[{"printable":"1.6605402 &#215; 10<sup>-24</sup>","numeric":1.6605402e-24}]}}};},
          "P",
          { type: "literal", value: "P", description: "\"P\"" },
          function(u) {return {"value": 1, "units": {"P": 1}, "metadata": {"P":{"isBase":false,"CODE":"P","isMetric":"yes","class":"cgs","names":["Poise"],"printSymbols":["P"],"properties":["dynamic viscosity"],"values":[{"printable":"1","numeric":1}]}}};},
          "G",
          { type: "literal", value: "G", description: "\"G\"" },
          function(u) {return {"value": 1, "units": {"G": 1}, "metadata": {"G":{"isBase":false,"CODE":"GS","isMetric":"yes","class":"cgs","names":["Gauss"],"printSymbols":["Gs"],"properties":["magnetic flux density"],"values":[{"printable":"1 &#215; 10<sup>-4</sup>","numeric":0.0001}]}}};},
          "R",
          { type: "literal", value: "R", description: "\"R\"" },
          function(u) {return {"value": 1, "units": {"R": 1}, "metadata": {"R":{"isBase":false,"CODE":"ROE","isMetric":"yes","class":"cgs","names":["Roentgen"],"printSymbols":["R"],"properties":["ion dose"],"values":[{"printable":"2.58 &#215; 10<sup>-4</sup>","numeric":0.000258}]}}};},
          "H",
          { type: "literal", value: "H", description: "\"H\"" },
          function(u) {return {"value": 1, "units": {"H": 1}, "metadata": {"H":{"isBase":false,"CODE":"H","isMetric":"yes","class":"si","names":["Henry"],"printSymbols":["H"],"properties":["inductance"],"values":[{"printable":"1","numeric":1}]}}};},
          "T",
          { type: "literal", value: "T", description: "\"T\"" },
          function(u) {return {"value": 1, "units": {"T": 1}, "metadata": {"T":{"isBase":false,"CODE":"T","isMetric":"yes","class":"si","names":["Tesla"],"printSymbols":["T"],"properties":["magnetic flux density"],"values":[{"printable":"1","numeric":1}]}}};},
          "U",
          { type: "literal", value: "U", description: "\"U\"" },
          function(u) {return {"value": 1, "units": {"U": 1}, "metadata": {"U":{"isBase":false,"CODE":"U","isMetric":"yes","class":"chemical","names":["Unit"],"printSymbols":["U"],"properties":["catalytic activity"],"values":[{"printable":"1","numeric":1}]}}};},
          "B",
          { type: "literal", value: "B", description: "\"B\"" },
          function(u) {return {"value": 1, "units": {"B": 1}, "metadata": {"B":{"isBase":false,"CODE":"B","isMetric":"yes","isSpecial":"yes","class":"levels","names":["bel"],"printSymbols":["B"],"properties":["level"],"values":[{"printable":"<function name=\"lg\" value=\"1\" Unit=\"1\"/>","numeric":null}]}}};},
          "S",
          { type: "literal", value: "S", description: "\"S\"" },
          function(u) {return {"value": 1, "units": {"S": 1}, "metadata": {"S":{"isBase":false,"CODE":"SIE","isMetric":"yes","class":"si","names":["Siemens"],"printSymbols":["S"],"properties":["electric conductance"],"values":[{"printable":"1","numeric":1}]}}};},
          "m",
          { type: "literal", value: "m", description: "\"m\"" },
          function(u) {return {"value": 1, "units": {"m": 1}, "metadata": {"m":{"isBase":true,"CODE":"M","dim":"L","names":["meter"],"printSymbols":["m"],"properties":["length"]}}};},
          "s",
          { type: "literal", value: "s", description: "\"s\"" },
          function(u) {return {"value": 1, "units": {"s": 1}, "metadata": {"s":{"isBase":true,"CODE":"S","dim":"T","names":["second"],"printSymbols":["s"],"properties":["time"]}}};},
          "F",
          { type: "literal", value: "F", description: "\"F\"" },
          function(u) {return {"value": 1, "units": {"F": 1}, "metadata": {"F":{"isBase":false,"CODE":"F","isMetric":"yes","class":"si","names":["Farad"],"printSymbols":["F"],"properties":["electric capacitance"],"values":[{"printable":"1","numeric":1}]}}};},
          "l",
          { type: "literal", value: "l", description: "\"l\"" },
          function(u) {return {"value": 1, "units": {"l": 1}, "metadata": {"l":{"isBase":false,"CODE":"L","isMetric":"yes","class":"iso1000","names":["liter"],"printSymbols":["l"],"properties":["volume"],"values":[{"printable":"1","numeric":1}]}}};},
          "V",
          { type: "literal", value: "V", description: "\"V\"" },
          function(u) {return {"value": 1, "units": {"V": 1}, "metadata": {"V":{"isBase":false,"CODE":"V","isMetric":"yes","class":"si","names":["Volt"],"printSymbols":["V"],"properties":["electric potential"],"values":[{"printable":"1","numeric":1}]}}};},
          "A",
          { type: "literal", value: "A", description: "\"A\"" },
          function(u) {return {"value": 1, "units": {"A": 1}, "metadata": {"A":{"isBase":false,"CODE":"A","isMetric":"yes","class":"si","names":["Ampère"],"printSymbols":["A"],"properties":["electric current"],"values":[{"printable":"1","numeric":1}]}}};},
          "W",
          { type: "literal", value: "W", description: "\"W\"" },
          function(u) {return {"value": 1, "units": {"W": 1}, "metadata": {"W":{"isBase":false,"CODE":"W","isMetric":"yes","class":"si","names":["Watt"],"printSymbols":["W"],"properties":["power"],"values":[{"printable":"1","numeric":1}]}}};},
          "K",
          { type: "literal", value: "K", description: "\"K\"" },
          function(u) {return {"value": 1, "units": {"K": 1}, "metadata": {"K":{"isBase":true,"CODE":"K","dim":"C","names":["Kelvin"],"printSymbols":["K"],"properties":["temperature"]}}};},
          "C",
          { type: "literal", value: "C", description: "\"C\"" },
          function(u) {return {"value": 1, "units": {"C": 1}, "metadata": {"C":{"isBase":true,"CODE":"C","dim":"Q","names":["Coulomb"],"printSymbols":["C"],"properties":["electric charge"]}}};},
          "b",
          { type: "literal", value: "b", description: "\"b\"" },
          function(u) {return {"value": 1, "units": {"b": 1}, "metadata": {"b":{"isBase":false,"CODE":"BRN","isMetric":"no","class":"misc","names":["barn"],"printSymbols":["b"],"properties":["action area"],"values":[{"printable":"100","numeric":100}]}}};},
          "%",
          { type: "literal", value: "%", description: "\"%\"" },
          function(u) {return {"value": 1, "units": {"%": 1}, "metadata": {"%":{"isBase":false,"CODE":"%","isMetric":"no","class":"dimless","names":["percent"],"printSymbols":["%"],"properties":["fraction"],"values":[{"printable":"1","numeric":1}]}}};},
          "J",
          { type: "literal", value: "J", description: "\"J\"" },
          function(u) {return {"value": 1, "units": {"J": 1}, "metadata": {"J":{"isBase":false,"CODE":"J","isMetric":"yes","class":"si","names":["Joule"],"printSymbols":["J"],"properties":["energy"],"values":[{"printable":"1","numeric":1}]}}};},
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          function(u) {return {"value": 1, "units": {"'": 1}, "metadata": {"'":{"isBase":false,"CODE":"'","isMetric":"no","class":"iso1000","names":["minute"],"printSymbols":["'"],"properties":["plane angle"],"values":[{"printable":"1","numeric":1}]}}};},
          "h",
          { type: "literal", value: "h", description: "\"h\"" },
          function(u) {return {"value": 1, "units": {"h": 1}, "metadata": {"h":{"isBase":false,"CODE":"HR","isMetric":"no","class":"iso1000","names":["hour"],"printSymbols":["h"],"properties":["time"],"values":[{"printable":"60","numeric":60}]}}};},
          "d",
          { type: "literal", value: "d", description: "\"d\"" },
          function(u) {return {"value": 1, "units": {"d": 1}, "metadata": {"d":{"isBase":false,"CODE":"D","isMetric":"no","class":"iso1000","names":["day"],"printSymbols":["d"],"properties":["time"],"values":[{"printable":"24","numeric":24}]}}};},
          "N",
          { type: "literal", value: "N", description: "\"N\"" },
          function(u) {return {"value": 1, "units": {"N": 1}, "metadata": {"N":{"isBase":false,"CODE":"N","isMetric":"yes","class":"si","names":["Newton"],"printSymbols":["N"],"properties":["force"],"values":[{"printable":"1","numeric":1}]}}};},
          "a",
          { type: "literal", value: "a", description: "\"a\"" },
          function(u) {return {"value": 1, "units": {"a": 1}, "metadata": {"a":{"isBase":false,"CODE":"ANN","isMetric":"no","class":"iso1000","names":["year"],"printSymbols":["a"],"properties":["time"],"values":[{"printable":"1","numeric":1}]}}};},
          "g",
          { type: "literal", value: "g", description: "\"g\"" },
          function(u) {return {"value": 1, "units": {"g": 1}, "metadata": {"g":{"isBase":true,"CODE":"G","dim":"M","names":["gram"],"printSymbols":["g"],"properties":["mass"]}}};},
          "Y",
          { type: "literal", value: "Y", description: "\"Y\"" },
          "Z",
          { type: "literal", value: "Z", description: "\"Z\"" },
          "E",
          { type: "literal", value: "E", description: "\"E\"" },
          "M",
          { type: "literal", value: "M", description: "\"M\"" },
          "k",
          { type: "literal", value: "k", description: "\"k\"" },
          "da",
          { type: "literal", value: "da", description: "\"da\"" },
          "c",
          { type: "literal", value: "c", description: "\"c\"" },
          "n",
          { type: "literal", value: "n", description: "\"n\"" },
          "p",
          { type: "literal", value: "p", description: "\"p\"" },
          "f",
          { type: "literal", value: "f", description: "\"f\"" },
          "z",
          { type: "literal", value: "z", description: "\"z\"" },
          "y",
          { type: "literal", value: "y", description: "\"y\"" },
          "Ki",
          { type: "literal", value: "Ki", description: "\"Ki\"" },
          "Mi",
          { type: "literal", value: "Mi", description: "\"Mi\"" },
          "Gi",
          { type: "literal", value: "Gi", description: "\"Gi\"" },
          "Ti",
          { type: "literal", value: "Ti", description: "\"Ti\"" }
        ],

        peg$bytecode = [
          peg$decode("!7!+' 4!6 !! %"),
          peg$decode("!.\"\"\"2\"3#+2$7#+(%4\"6$\"! %$\"# !\"# !*# \"7#"),
          peg$decode("!.%\"\"2%3&+-$7$+#%'\"%$\"# !\"# !*> \"!.\"\"\"2\"3#+-$7$+#%'\"%$\"# !\"# !"),
          peg$decode("!7$+;$ '7\",#&7\"\"+)%4\"6(\"\"! %$\"# !\"# !"),
          peg$decode("!7%+c$7&*# \" )+S% '7),#&7)\"+A%56* \"\"!)##\" !\" ++)%4$6,$\"#\"%$$# !$## !$\"# !\"# !*E \"!7(+:$ '7),#&7)\"+(%4\"6-\"!!%$\"# !\"# !"),
          peg$decode("!7'+' 4!6.!! %*Y \"!./\"\"2/30+B$7#+8%.1\"\"2132+(%4#63#!!%$## !$\"# !\"# !*# \"7)"),
          peg$decode("!04\"\"1!35*# \" )+3$7(+)%4\"66\"\"! %$\"# !\"# !"),
          peg$decode("!7+*# \" )+K$7*+A%567 \"! )##\" !\" ++)%4#68#\"\"!%$## !$\"# !\"# !*# \"7*"),
          peg$decode("! '09\"\"1!3:+,$,)&09\"\"1!3:\"\"\" !+i$.;\"\"2;3<*# \" )+S%7&*# \" )+C%56= #\"! )##\" !\" ++*%4$6>$##\"!%$$# !$## !$\"# !\"# !"),
          peg$decode("!.?\"\"2?3@+t$ '0A\"\"1!3B+,$,)&0A\"\"1!3B\"\"\" !+O%.C\"\"2C3D+?%56E !!)##\" !\" ++(%4$6F$!\"%$$# !$## !$\"# !\"# !"),
          peg$decode("!.G\"\"2G3H+' 4!6I!! %*\u1CCD \"!.J\"\"2J3K+' 4!6L!! %*\u1CB5 \"!.M\"\"2M3N+' 4!6O!! %*\u1C9D \"!.P\"\"2P3Q+' 4!6R!! %*\u1C85 \"!.S\"\"2S3T+' 4!6U!! %*\u1C6D \"!.V\"\"2V3W+' 4!6X!! %*\u1C55 \"!.Y\"\"2Y3Z+' 4!6[!! %*\u1C3D \"!.\\\"\"2\\3]+' 4!6^!! %*\u1C25 \"!._\"\"2_3`+' 4!6a!! %*\u1C0D \"!.b\"\"2b3c+' 4!6d!! %*\u1BF5 \"!.e\"\"2e3f+' 4!6g!! %*\u1BDD \"!.h\"\"2h3i+' 4!6j!! %*\u1BC5 \"!.k\"\"2k3l+' 4!6m!! %*\u1BAD \"!.n\"\"2n3o+' 4!6p!! %*\u1B95 \"!.q\"\"2q3r+' 4!6s!! %*\u1B7D \"!.t\"\"2t3u+' 4!6v!! %*\u1B65 \"!.w\"\"2w3x+' 4!6y!! %*\u1B4D \"!.z\"\"2z3{+' 4!6|!! %*\u1B35 \"!.}\"\"2}3~+' 4!6!! %*\u1B1D \"!.\x80\"\"2\x803\x81+' 4!6\x82!! %*\u1B05 \"!.\x83\"\"2\x833\x84+' 4!6\x85!! %*\u1AED \"!.\x86\"\"2\x863\x87+' 4!6\x88!! %*\u1AD5 \"!.\x89\"\"2\x893\x8A+' 4!6\x8B!! %*\u1ABD \"!.\x8C\"\"2\x8C3\x8D+' 4!6\x8E!! %*\u1AA5 \"!.\x8F\"\"2\x8F3\x90+' 4!6\x91!! %*\u1A8D \"!.\x92\"\"2\x923\x93+' 4!6\x94!! %*\u1A75 \"!.\x95\"\"2\x953\x96+' 4!6\x97!! %*\u1A5D \"!.\x98\"\"2\x983\x99+' 4!6\x9A!! %*\u1A45 \"!.\x9B\"\"2\x9B3\x9C+' 4!6\x9D!! %*\u1A2D \"!.\x9E\"\"2\x9E3\x9F+' 4!6\xA0!! %*\u1A15 \"!.\xA1\"\"2\xA13\xA2+' 4!6\xA3!! %*\u19FD \"!.\xA4\"\"2\xA43\xA5+' 4!6\xA6!! %*\u19E5 \"!.\xA7\"\"2\xA73\xA8+' 4!6\xA9!! %*\u19CD \"!.\xAA\"\"2\xAA3\xAB+' 4!6\xAC!! %*\u19B5 \"!.\xAD\"\"2\xAD3\xAE+' 4!6\xAF!! %*\u199D \"!.\xB0\"\"2\xB03\xB1+' 4!6\xB2!! %*\u1985 \"!.\xB3\"\"2\xB33\xB4+' 4!6\xB5!! %*\u196D \"!.\xB6\"\"2\xB63\xB7+' 4!6\xB8!! %*\u1955 \"!.\xB9\"\"2\xB93\xBA+' 4!6\xBB!! %*\u193D \"!.\xBC\"\"2\xBC3\xBD+' 4!6\xBE!! %*\u1925 \"!.\xBF\"\"2\xBF3\xC0+' 4!6\xC1!! %*\u190D \"!.\xC2\"\"2\xC23\xC3+' 4!6\xC4!! %*\u18F5 \"!.\xC5\"\"2\xC53\xC6+' 4!6\xC7!! %*\u18DD \"!.\xC8\"\"2\xC83\xC9+' 4!6\xCA!! %*\u18C5 \"!.\xCB\"\"2\xCB3\xCC+' 4!6\xCD!! %*\u18AD \"!.\xCE\"\"2\xCE3\xCF+' 4!6\xD0!! %*\u1895 \"!.\xD1\"\"2\xD13\xD2+' 4!6\xD3!! %*\u187D \"!.\xD4\"\"2\xD43\xD5+' 4!6\xD6!! %*\u1865 \"!.\xD7\"\"2\xD73\xD8+' 4!6\xD9!! %*\u184D \"!.\xDA\"\"2\xDA3\xDB+' 4!6\xDC!! %*\u1835 \"!.\xDD\"\"2\xDD3\xDE+' 4!6\xDF!! %*\u181D \"!.\xE0\"\"2\xE03\xE1+' 4!6\xE2!! %*\u1805 \"!.\xE3\"\"2\xE33\xE4+' 4!6\xE5!! %*\u17ED \"!.\xE6\"\"2\xE63\xE7+' 4!6\xE8!! %*\u17D5 \"!.\xE9\"\"2\xE93\xEA+' 4!6\xEB!! %*\u17BD \"!.\xEC\"\"2\xEC3\xED+' 4!6\xEE!! %*\u17A5 \"!.\xEF\"\"2\xEF3\xF0+' 4!6\xF1!! %*\u178D \"!.\xF2\"\"2\xF23\xF3+' 4!6\xF4!! %*\u1775 \"!.\xF5\"\"2\xF53\xF6+' 4!6\xF7!! %*\u175D \"!.\xF8\"\"2\xF83\xF9+' 4!6\xFA!! %*\u1745 \"!.\xFB\"\"2\xFB3\xFC+' 4!6\xFD!! %*\u172D \"!.\xFE\"\"2\xFE3\xFF+' 4!6\u0100!! %*\u1715 \"!.\u0101\"\"2\u01013\u0102+' 4!6\u0103!! %*\u16FD \"!.\u0104\"\"2\u01043\u0105+' 4!6\u0106!! %*\u16E5 \"!.\u0107\"\"2\u01073\u0108+' 4!6\u0109!! %*\u16CD \"!.\u010A\"\"2\u010A3\u010B+' 4!6\u010C!! %*\u16B5 \"!.\u010D\"\"2\u010D3\u010E+' 4!6\u010F!! %*\u169D \"!.\u0110\"\"2\u01103\u0111+' 4!6\u0112!! %*\u1685 \"!.\u0113\"\"2\u01133\u0114+' 4!6\u0115!! %*\u166D \"!.\u0116\"\"2\u01163\u0117+' 4!6\u0118!! %*\u1655 \"!.\u0119\"\"2\u01193\u011A+' 4!6\u011B!! %*\u163D \"!.\u011C\"\"2\u011C3\u011D+' 4!6\u011E!! %*\u1625 \"!.\u011F\"\"2\u011F3\u0120+' 4!6\u0121!! %*\u160D \"!.\u0122\"\"2\u01223\u0123+' 4!6\u0124!! %*\u15F5 \"!.\u0125\"\"2\u01253\u0126+' 4!6\u0127!! %*\u15DD \"!.\u0128\"\"2\u01283\u0129+' 4!6\u012A!! %*\u15C5 \"!.\u012B\"\"2\u012B3\u012C+' 4!6\u012D!! %*\u15AD \"!.\u012E\"\"2\u012E3\u012F+' 4!6\u0130!! %*\u1595 \"!.\u0131\"\"2\u01313\u0132+' 4!6\u0133!! %*\u157D \"!.\u0134\"\"2\u01343\u0135+' 4!6\u0136!! %*\u1565 \"!.\u0137\"\"2\u01373\u0138+' 4!6\u0139!! %*\u154D \"!.\u013A\"\"2\u013A3\u013B+' 4!6\u013C!! %*\u1535 \"!.\u013D\"\"2\u013D3\u013E+' 4!6\u013F!! %*\u151D \"!.\u0140\"\"2\u01403\u0141+' 4!6\u0142!! %*\u1505 \"!.\u0143\"\"2\u01433\u0144+' 4!6\u0145!! %*\u14ED \"!.\u0146\"\"2\u01463\u0147+' 4!6\u0148!! %*\u14D5 \"!.\u0149\"\"2\u01493\u014A+' 4!6\u014B!! %*\u14BD \"!.\u014C\"\"2\u014C3\u014D+' 4!6\u014E!! %*\u14A5 \"!.\u014F\"\"2\u014F3\u0150+' 4!6\u0151!! %*\u148D \"!.\u0152\"\"2\u01523\u0153+' 4!6\u0154!! %*\u1475 \"!.\u0155\"\"2\u01553\u0156+' 4!6\u0157!! %*\u145D \"!.\u0158\"\"2\u01583\u0159+' 4!6\u015A!! %*\u1445 \"!.\u015B\"\"2\u015B3\u015C+' 4!6\u015D!! %*\u142D \"!.\u015E\"\"2\u015E3\u015F+' 4!6\u0160!! %*\u1415 \"!.\u0161\"\"2\u01613\u0162+' 4!6\u0163!! %*\u13FD \"!.\u0164\"\"2\u01643\u0165+' 4!6\u0166!! %*\u13E5 \"!.\u0167\"\"2\u01673\u0168+' 4!6\u0169!! %*\u13CD \"!.\u016A\"\"2\u016A3\u016B+' 4!6\u016C!! %*\u13B5 \"!.\u016D\"\"2\u016D3\u016E+' 4!6\u016F!! %*\u139D \"!.\u0170\"\"2\u01703\u0171+' 4!6\u0172!! %*\u1385 \"!.\u0173\"\"2\u01733\u0174+' 4!6\u0175!! %*\u136D \"!.\u0176\"\"2\u01763\u0177+' 4!6\u0178!! %*\u1355 \"!.\u0179\"\"2\u01793\u017A+' 4!6\u017B!! %*\u133D \"!.\u017C\"\"2\u017C3\u017D+' 4!6\u017E!! %*\u1325 \"!.\u017F\"\"2\u017F3\u0180+' 4!6\u0181!! %*\u130D \"!.\u0182\"\"2\u01823\u0183+' 4!6\u0184!! %*\u12F5 \"!.\u0185\"\"2\u01853\u0186+' 4!6\u0187!! %*\u12DD \"!.\u0188\"\"2\u01883\u0189+' 4!6\u018A!! %*\u12C5 \"!.\u018B\"\"2\u018B3\u018C+' 4!6\u018D!! %*\u12AD \"!.\u018E\"\"2\u018E3\u018F+' 4!6\u0190!! %*\u1295 \"!.\u0191\"\"2\u01913\u0192+' 4!6\u0193!! %*\u127D \"!.\u0194\"\"2\u01943\u0195+' 4!6\u0196!! %*\u1265 \"!.\u0197\"\"2\u01973\u0198+' 4!6\u0199!! %*\u124D \"!.\u019A\"\"2\u019A3\u019B+' 4!6\u019C!! %*\u1235 \"!.\u019D\"\"2\u019D3\u019E+' 4!6\u019F!! %*\u121D \"!.\u01A0\"\"2\u01A03\u01A1+' 4!6\u01A2!! %*\u1205 \"!.\u01A3\"\"2\u01A33\u01A4+' 4!6\u01A5!! %*\u11ED \"!.\u01A6\"\"2\u01A63\u01A7+' 4!6\u01A8!! %*\u11D5 \"!.\u01A9\"\"2\u01A93\u01AA+' 4!6\u01AB!! %*\u11BD \"!.\u01AC\"\"2\u01AC3\u01AD+' 4!6\u01AE!! %*\u11A5 \"!.\u01AF\"\"2\u01AF3\u01B0+' 4!6\u01B1!! %*\u118D \"!.\u01B2\"\"2\u01B23\u01B3+' 4!6\u01B4!! %*\u1175 \"!.\u01B5\"\"2\u01B53\u01B6+' 4!6\u01B7!! %*\u115D \"!.\u01B8\"\"2\u01B83\u01B9+' 4!6\u01BA!! %*\u1145 \"!.\u01BB\"\"2\u01BB3\u01BC+' 4!6\u01BD!! %*\u112D \"!.\u01BE\"\"2\u01BE3\u01BF+' 4!6\u01C0!! %*\u1115 \"!.\u01C1\"\"2\u01C13\u01C2+' 4!6\u01C3!! %*\u10FD \"!.\u01C4\"\"2\u01C43\u01C5+' 4!6\u01C6!! %*\u10E5 \"!.\u01C7\"\"2\u01C73\u01C8+' 4!6\u01C9!! %*\u10CD \"!.\u01CA\"\"2\u01CA3\u01CB+' 4!6\u01CC!! %*\u10B5 \"!.\u01CD\"\"2\u01CD3\u01CE+' 4!6\u01CF!! %*\u109D \"!.\u01D0\"\"2\u01D03\u01D1+' 4!6\u01D2!! %*\u1085 \"!.\u01D3\"\"2\u01D33\u01D4+' 4!6\u01D5!! %*\u106D \"!.\u01D6\"\"2\u01D63\u01D7+' 4!6\u01D8!! %*\u1055 \"!.\u01D9\"\"2\u01D93\u01DA+' 4!6\u01DB!! %*\u103D \"!.\u01DC\"\"2\u01DC3\u01DD+' 4!6\u01DE!! %*\u1025 \"!.\u01DF\"\"2\u01DF3\u01E0+' 4!6\u01E1!! %*\u100D \"!.\u01E2\"\"2\u01E23\u01E3+' 4!6\u01E4!! %*\u0FF5 \"!.\u01E5\"\"2\u01E53\u01E6+' 4!6\u01E7!! %*\u0FDD \"!.\u01E8\"\"2\u01E83\u01E9+' 4!6\u01EA!! %*\u0FC5 \"!.\u01EB\"\"2\u01EB3\u01EC+' 4!6\u01ED!! %*\u0FAD \"!.\u01EE\"\"2\u01EE3\u01EF+' 4!6\u01F0!! %*\u0F95 \"!.\u01F1\"\"2\u01F13\u01F2+' 4!6\u01F3!! %*\u0F7D \"!.\u01F4\"\"2\u01F43\u01F5+' 4!6\u01F6!! %*\u0F65 \"!.\u01F7\"\"2\u01F73\u01F8+' 4!6\u01F9!! %*\u0F4D \"!.\u01FA\"\"2\u01FA3\u01FB+' 4!6\u01FC!! %*\u0F35 \"!.\u01FD\"\"2\u01FD3\u01FE+' 4!6\u01FF!! %*\u0F1D \"!.\u0200\"\"2\u02003\u0201+' 4!6\u0202!! %*\u0F05 \"!.\u0203\"\"2\u02033\u0204+' 4!6\u0205!! %*\u0EED \"!.\u0206\"\"2\u02063\u0207+' 4!6\u0208!! %*\u0ED5 \"!.\u0209\"\"2\u02093\u020A+' 4!6\u020B!! %*\u0EBD \"!.\u020C\"\"2\u020C3\u020D+' 4!6\u020E!! %*\u0EA5 \"!.\u020F\"\"2\u020F3\u0210+' 4!6\u0211!! %*\u0E8D \"!.\u0212\"\"2\u02123\u0213+' 4!6\u0214!! %*\u0E75 \"!.\u0215\"\"2\u02153\u0216+' 4!6\u0217!! %*\u0E5D \"!.\u0218\"\"2\u02183\u0219+' 4!6\u021A!! %*\u0E45 \"!.\u021B\"\"2\u021B3\u021C+' 4!6\u021D!! %*\u0E2D \"!.\u021E\"\"2\u021E3\u021F+' 4!6\u0220!! %*\u0E15 \"!.\u0221\"\"2\u02213\u0222+' 4!6\u0223!! %*\u0DFD \"!.\u0224\"\"2\u02243\u0225+' 4!6\u0226!! %*\u0DE5 \"!.\u0227\"\"2\u02273\u0228+' 4!6\u0229!! %*\u0DCD \"!.\u022A\"\"2\u022A3\u022B+' 4!6\u022C!! %*\u0DB5 \"!.\u022D\"\"2\u022D3\u022E+' 4!6\u022F!! %*\u0D9D \"!.\u0230\"\"2\u02303\u0231+' 4!6\u0232!! %*\u0D85 \"!.\u0233\"\"2\u02333\u0234+' 4!6\u0235!! %*\u0D6D \"!.\u0236\"\"2\u02363\u0237+' 4!6\u0238!! %*\u0D55 \"!.\u0239\"\"2\u02393\u023A+' 4!6\u023B!! %*\u0D3D \"!.\u023C\"\"2\u023C3\u023D+' 4!6\u023E!! %*\u0D25 \"!.\u023F\"\"2\u023F3\u0240+' 4!6\u0241!! %*\u0D0D \"!.\u0242\"\"2\u02423\u0243+' 4!6\u0244!! %*\u0CF5 \"!.\u0245\"\"2\u02453\u0246+' 4!6\u0247!! %*\u0CDD \"!.\u0248\"\"2\u02483\u0249+' 4!6\u024A!! %*\u0CC5 \"!.\u024B\"\"2\u024B3\u024C+' 4!6\u024D!! %*\u0CAD \"!.\u024E\"\"2\u024E3\u024F+' 4!6\u0250!! %*\u0C95 \"!.\u0251\"\"2\u02513\u0252+' 4!6\u0253!! %*\u0C7D \"!.\u0254\"\"2\u02543\u0255+' 4!6\u0256!! %*\u0C65 \"!.\u0257\"\"2\u02573\u0258+' 4!6\u0259!! %*\u0C4D \"!.\u025A\"\"2\u025A3\u025B+' 4!6\u025C!! %*\u0C35 \"!.\u025D\"\"2\u025D3\u025E+' 4!6\u025F!! %*\u0C1D \"!.\u0260\"\"2\u02603\u0261+' 4!6\u0262!! %*\u0C05 \"!.\u0263\"\"2\u02633\u0264+' 4!6\u0265!! %*\u0BED \"!.\u0266\"\"2\u02663\u0267+' 4!6\u0268!! %*\u0BD5 \"!.\u0269\"\"2\u02693\u026A+' 4!6\u026B!! %*\u0BBD \"!.\u026C\"\"2\u026C3\u026D+' 4!6\u026E!! %*\u0BA5 \"!.\u026F\"\"2\u026F3\u0270+' 4!6\u0271!! %*\u0B8D \"!.\u0272\"\"2\u02723\u0273+' 4!6\u0274!! %*\u0B75 \"!.\u0275\"\"2\u02753\u0276+' 4!6\u0277!! %*\u0B5D \"!.\u0278\"\"2\u02783\u0279+' 4!6\u027A!! %*\u0B45 \"!.\u027B\"\"2\u027B3\u027C+' 4!6\u027D!! %*\u0B2D \"!.\u027E\"\"2\u027E3\u027F+' 4!6\u0280!! %*\u0B15 \"!.\u0281\"\"2\u02813\u0282+' 4!6\u0283!! %*\u0AFD \"!.\u0284\"\"2\u02843\u0285+' 4!6\u0286!! %*\u0AE5 \"!.\u0287\"\"2\u02873\u0288+' 4!6\u0289!! %*\u0ACD \"!.\u028A\"\"2\u028A3\u028B+' 4!6\u028C!! %*\u0AB5 \"!.\u028D\"\"2\u028D3\u028E+' 4!6\u028F!! %*\u0A9D \"!.\u0290\"\"2\u02903\u0291+' 4!6\u0292!! %*\u0A85 \"!.\u0293\"\"2\u02933\u0294+' 4!6\u0295!! %*\u0A6D \"!.\u0296\"\"2\u02963\u0297+' 4!6\u0298!! %*\u0A55 \"!.\u0299\"\"2\u02993\u029A+' 4!6\u029B!! %*\u0A3D \"!.\u029C\"\"2\u029C3\u029D+' 4!6\u029E!! %*\u0A25 \"!.\u029F\"\"2\u029F3\u02A0+' 4!6\u02A1!! %*\u0A0D \"!.\u02A2\"\"2\u02A23\u02A3+' 4!6\u02A4!! %*\u09F5 \"!.\u02A5\"\"2\u02A53\u02A6+' 4!6\u02A7!! %*\u09DD \"!.\u02A8\"\"2\u02A83\u02A9+' 4!6\u02AA!! %*\u09C5 \"!.\u02AB\"\"2\u02AB3\u02AC+' 4!6\u02AD!! %*\u09AD \"!.\u02AE\"\"2\u02AE3\u02AF+' 4!6\u02B0!! %*\u0995 \"!.\u02B1\"\"2\u02B13\u02B2+' 4!6\u02B3!! %*\u097D \"!.\u02B4\"\"2\u02B43\u02B5+' 4!6\u02B6!! %*\u0965 \"!.\u02B7\"\"2\u02B73\u02B8+' 4!6\u02B9!! %*\u094D \"!.\u02BA\"\"2\u02BA3\u02BB+' 4!6\u02BC!! %*\u0935 \"!.\u02BD\"\"2\u02BD3\u02BE+' 4!6\u02BF!! %*\u091D \"!.\u02C0\"\"2\u02C03\u02C1+' 4!6\u02C2!! %*\u0905 \"!.\u02C3\"\"2\u02C33\u02C4+' 4!6\u02C5!! %*\u08ED \"!.\u02C6\"\"2\u02C63\u02C7+' 4!6\u02C8!! %*\u08D5 \"!.\u02C9\"\"2\u02C93\u02CA+' 4!6\u02CB!! %*\u08BD \"!.\u02CC\"\"2\u02CC3\u02CD+' 4!6\u02CE!! %*\u08A5 \"!.\u02CF\"\"2\u02CF3\u02D0+' 4!6\u02D1!! %*\u088D \"!.\u02D2\"\"2\u02D23\u02D3+' 4!6\u02D4!! %*\u0875 \"!.\u02D5\"\"2\u02D53\u02D6+' 4!6\u02D7!! %*\u085D \"!.\u02D8\"\"2\u02D83\u02D9+' 4!6\u02DA!! %*\u0845 \"!.\u02DB\"\"2\u02DB3\u02DC+' 4!6\u02DD!! %*\u082D \"!.\u02DE\"\"2\u02DE3\u02DF+' 4!6\u02E0!! %*\u0815 \"!.\u02E1\"\"2\u02E13\u02E2+' 4!6\u02E3!! %*\u07FD \"!.\u02E4\"\"2\u02E43\u02E5+' 4!6\u02E6!! %*\u07E5 \"!.\u02E7\"\"2\u02E73\u02E8+' 4!6\u02E9!! %*\u07CD \"!.\u02EA\"\"2\u02EA3\u02EB+' 4!6\u02EC!! %*\u07B5 \"!.\u02ED\"\"2\u02ED3\u02EE+' 4!6\u02EF!! %*\u079D \"!.\u02F0\"\"2\u02F03\u02F1+' 4!6\u02F2!! %*\u0785 \"!.\u02F3\"\"2\u02F33\u02F4+' 4!6\u02F5!! %*\u076D \"!.\u02F6\"\"2\u02F63\u02F7+' 4!6\u02F8!! %*\u0755 \"!.\u02F9\"\"2\u02F93\u02FA+' 4!6\u02FB!! %*\u073D \"!.\u02FC\"\"2\u02FC3\u02FD+' 4!6\u02FE!! %*\u0725 \"!.\u02FF\"\"2\u02FF3\u0300+' 4!6\u0301!! %*\u070D \"!.\u0302\"\"2\u03023\u0303+' 4!6\u0304!! %*\u06F5 \"!.\u0305\"\"2\u03053\u0306+' 4!6\u0307!! %*\u06DD \"!.\u0308\"\"2\u03083\u0309+' 4!6\u030A!! %*\u06C5 \"!.\u030B\"\"2\u030B3\u030C+' 4!6\u030D!! %*\u06AD \"!.\u030E\"\"2\u030E3\u030F+' 4!6\u0310!! %*\u0695 \"!.\u0311\"\"2\u03113\u0312+' 4!6\u0313!! %*\u067D \"!.\u0314\"\"2\u03143\u0315+' 4!6\u0316!! %*\u0665 \"!.\u0317\"\"2\u03173\u0318+' 4!6\u0319!! %*\u064D \"!.\u031A\"\"2\u031A3\u031B+' 4!6\u031C!! %*\u0635 \"!.\u031D\"\"2\u031D3\u031E+' 4!6\u031F!! %*\u061D \"!.\u0320\"\"2\u03203\u0321+' 4!6\u0322!! %*\u0605 \"!.\u0323\"\"2\u03233\u0324+' 4!6\u0325!! %*\u05ED \"!.\u0326\"\"2\u03263\u0327+' 4!6\u0328!! %*\u05D5 \"!.\u0329\"\"2\u03293\u032A+' 4!6\u032B!! %*\u05BD \"!.\u032C\"\"2\u032C3\u032D+' 4!6\u032E!! %*\u05A5 \"!.\u032F\"\"2\u032F3\u0330+' 4!6\u0331!! %*\u058D \"!.\u0332\"\"2\u03323\u0333+' 4!6\u0334!! %*\u0575 \"!.\u0335\"\"2\u03353\u0336+' 4!6\u0337!! %*\u055D \"!.\u0338\"\"2\u03383\u0339+' 4!6\u033A!! %*\u0545 \"!.\u033B\"\"2\u033B3\u033C+' 4!6\u033D!! %*\u052D \"!.\u033E\"\"2\u033E3\u033F+' 4!6\u0340!! %*\u0515 \"!.\u0341\"\"2\u03413\u0342+' 4!6\u0343!! %*\u04FD \"!.\u0344\"\"2\u03443\u0345+' 4!6\u0346!! %*\u04E5 \"!.\u0347\"\"2\u03473\u0348+' 4!6\u0349!! %*\u04CD \"!.\u034A\"\"2\u034A3\u034B+' 4!6\u034C!! %*\u04B5 \"!.\u034D\"\"2\u034D3\u034E+' 4!6\u034F!! %*\u049D \"!.\u0350\"\"2\u03503\u0351+' 4!6\u0352!! %*\u0485 \"!.\u0353\"\"2\u03533\u0354+' 4!6\u0355!! %*\u046D \"!.\u0356\"\"2\u03563\u0357+' 4!6\u0358!! %*\u0455 \"!.\u0359\"\"2\u03593\u035A+' 4!6\u035B!! %*\u043D \"!.\u035C\"\"2\u035C3\u035D+' 4!6\u035E!! %*\u0425 \"!.\u035F\"\"2\u035F3\u0360+' 4!6\u0361!! %*\u040D \"!.\u0362\"\"2\u03623\u0363+' 4!6\u0364!! %*\u03F5 \"!.\u0365\"\"2\u03653\u0366+' 4!6\u0367!! %*\u03DD \"!.\u0368\"\"2\u03683\u0369+' 4!6\u036A!! %*\u03C5 \"!.\u036B\"\"2\u036B3\u036C+' 4!6\u036D!! %*\u03AD \"!.\u036E\"\"2\u036E3\u036F+' 4!6\u0370!! %*\u0395 \"!.\u0371\"\"2\u03713\u0372+' 4!6\u0373!! %*\u037D \"!.\u0374\"\"2\u03743\u0375+' 4!6\u0376!! %*\u0365 \"!.\u0377\"\"2\u03773\u0378+' 4!6\u0379!! %*\u034D \"!.\u037A\"\"2\u037A3\u037B+' 4!6\u037C!! %*\u0335 \"!.\u037D\"\"2\u037D3\u037E+' 4!6\u037F!! %*\u031D \"!.\u0380\"\"2\u03803\u0381+' 4!6\u0382!! %*\u0305 \"!.\u0383\"\"2\u03833\u0384+' 4!6\u0385!! %*\u02ED \"!.\u0386\"\"2\u03863\u0387+' 4!6\u0388!! %*\u02D5 \"!.\u0389\"\"2\u03893\u038A+' 4!6\u038B!! %*\u02BD \"!.\u038C\"\"2\u038C3\u038D+' 4!6\u038E!! %*\u02A5 \"!.\u038F\"\"2\u038F3\u0390+' 4!6\u0391!! %*\u028D \"!.\u0392\"\"2\u03923\u0393+' 4!6\u0394!! %*\u0275 \"!.\u0395\"\"2\u03953\u0396+' 4!6\u0397!! %*\u025D \"!.\u0398\"\"2\u03983\u0399+' 4!6\u039A!! %*\u0245 \"!.\u039B\"\"2\u039B3\u039C+' 4!6\u039D!! %*\u022D \"!.\u039E\"\"2\u039E3\u039F+' 4!6\u03A0!! %*\u0215 \"!.\u03A1\"\"2\u03A13\u03A2+' 4!6\u03A3!! %*\u01FD \"!.\u03A4\"\"2\u03A43\u03A5+' 4!6\u03A6!! %*\u01E5 \"!.\u03A7\"\"2\u03A73\u03A8+' 4!6\u03A9!! %*\u01CD \"!.\u03AA\"\"2\u03AA3\u03AB+' 4!6\u03AC!! %*\u01B5 \"!.\u03AD\"\"2\u03AD3\u03AE+' 4!6\u03AF!! %*\u019D \"!.\u03B0\"\"2\u03B03\u03B1+' 4!6\u03B2!! %*\u0185 \"!.\u03B3\"\"2\u03B33\u03B4+' 4!6\u03B5!! %*\u016D \"!.\u03B6\"\"2\u03B63\u03B7+' 4!6\u03B8!! %*\u0155 \"!.\u03B9\"\"2\u03B93\u03BA+' 4!6\u03BB!! %*\u013D \"!.\u03BC\"\"2\u03BC3\u03BD+' 4!6\u03BE!! %*\u0125 \"!.\u03BF\"\"2\u03BF3\u03C0+' 4!6\u03C1!! %*\u010D \"!.\u03C2\"\"2\u03C23\u03C3+' 4!6\u03C4!! %*\xF5 \"!.\u03C5\"\"2\u03C53\u03C6+' 4!6\u03C7!! %*\xDD \"!.\u03C8\"\"2\u03C83\u03C9+' 4!6\u03CA!! %*\xC5 \"!.\u03CB\"\"2\u03CB3\u03CC+' 4!6\u03CD!! %*\xAD \"!.\u03CE\"\"2\u03CE3\u03CF+' 4!6\u03D0!! %*\x95 \"!.\u03D1\"\"2\u03D13\u03D2+' 4!6\u03D3!! %*} \"!.\u03D4\"\"2\u03D43\u03D5+' 4!6\u03D6!! %*e \"!.\u03D7\"\"2\u03D73\u03D8+' 4!6\u03D9!! %*M \"!.\u03DA\"\"2\u03DA3\u03DB+' 4!6\u03DC!! %*5 \"!.\u03DD\"\"2\u03DD3\u03DE+' 4!6\u03DF!! %"),
          peg$decode(".\u03E0\"\"2\u03E03\u03E1*\u0131 \".\u03E2\"\"2\u03E23\u03E3*\u0125 \".\u03E4\"\"2\u03E43\u03E5*\u0119 \".\u0392\"\"2\u03923\u0393*\u010D \".\u039E\"\"2\u039E3\u039F*\u0101 \".\u0395\"\"2\u03953\u0396*\xF5 \".\u03E6\"\"2\u03E63\u03E7*\xE9 \".\u03E8\"\"2\u03E83\u03E9*\xDD \".\u03D1\"\"2\u03D13\u03D2*\xD1 \".\u03EA\"\"2\u03EA3\u03EB*\xC5 \".\u03D4\"\"2\u03D43\u03D5*\xB9 \".\u03EC\"\"2\u03EC3\u03ED*\xAD \".\u03AA\"\"2\u03AA3\u03AB*\xA1 \".\u038F\"\"2\u038F3\u0390*\x95 \".\u03EE\"\"2\u03EE3\u03EF*\x89 \".\u03F0\"\"2\u03F03\u03F1*} \".\u03F2\"\"2\u03F23\u03F3*q \".\u03DA\"\"2\u03DA3\u03DB*e \".\u03F4\"\"2\u03F43\u03F5*Y \".\u03F6\"\"2\u03F63\u03F7*M \".\u03F8\"\"2\u03F83\u03F9*A \".\u03FA\"\"2\u03FA3\u03FB*5 \".\u03FC\"\"2\u03FC3\u03FD*) \".\u03FE\"\"2\u03FE3\u03FF")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }


      helpers = require('../lib/helpers');
      prefixes = require('./prefixes.json');
      prefixMetadata = require('./prefixMetadata.json');
      unitMetadata = require('./unitMetadata.json');
      metrics = require('./metrics.json');
      multiply = helpers.multiply;
      topower = helpers.topower;
      cleanup = helpers.cleanup;
      ismetric = helpers.ismetric(metrics);


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();

},{"../lib/helpers":8,"./metrics.json":2,"./prefixMetadata.json":3,"./prefixes.json":4,"./unitMetadata.json":6}],6:[function(require,module,exports){
module.exports={
  "10*": {
    "isBase": false,
    "CODE": "10*",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "the number ten for arbitrary powers"
    ],
    "printSymbols": [
      "10"
    ],
    "properties": [
      "number"
    ],
    "values": [
      {
        "printable": "10",
        "numeric": 10
      }
    ]
  },
  "10^": {
    "isBase": false,
    "CODE": "10^",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "the number ten for arbitrary powers"
    ],
    "printSymbols": [
      "10"
    ],
    "properties": [
      "number"
    ],
    "values": [
      {
        "printable": "10",
        "numeric": 10
      }
    ]
  },
  "[pi]": {
    "isBase": false,
    "CODE": "[PI]",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "the number pi"
    ],
    "printSymbols": [
      "&#960;"
    ],
    "properties": [
      "number"
    ],
    "values": [
      {
        "printable": "&#960;",
        "numeric": 3.141592653589793
      }
    ]
  },
  "%": {
    "isBase": false,
    "CODE": "%",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "percent"
    ],
    "printSymbols": [
      "%"
    ],
    "properties": [
      "fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ppth]": {
    "isBase": false,
    "CODE": "[PPTH]",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "parts per thousand"
    ],
    "printSymbols": [
      "ppth"
    ],
    "properties": [
      "fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ppm]": {
    "isBase": false,
    "CODE": "[PPM]",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "parts per million"
    ],
    "printSymbols": [
      "ppm"
    ],
    "properties": [
      "fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ppb]": {
    "isBase": false,
    "CODE": "[PPB]",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "parts per billion"
    ],
    "printSymbols": [
      "ppb"
    ],
    "properties": [
      "fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pptr]": {
    "isBase": false,
    "CODE": "[PPTR]",
    "isMetric": "no",
    "class": "dimless",
    "names": [
      "parts per trillion"
    ],
    "printSymbols": [
      "pptr"
    ],
    "properties": [
      "fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "mol": {
    "isBase": false,
    "CODE": "MOL",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "mole"
    ],
    "printSymbols": [
      "mol"
    ],
    "properties": [
      "amount of substance"
    ],
    "values": [
      {
        "printable": "6.0221367",
        "numeric": 6.0221367
      }
    ]
  },
  "sr": {
    "isBase": false,
    "CODE": "SR",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "steradian"
    ],
    "printSymbols": [
      "sr"
    ],
    "properties": [
      "solid angle"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Hz": {
    "isBase": false,
    "CODE": "HZ",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Hertz"
    ],
    "printSymbols": [
      "Hz"
    ],
    "properties": [
      "frequency"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "N": {
    "isBase": false,
    "CODE": "N",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Newton"
    ],
    "printSymbols": [
      "N"
    ],
    "properties": [
      "force"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Pa": {
    "isBase": false,
    "CODE": "PAL",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Pascal"
    ],
    "printSymbols": [
      "Pa"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "J": {
    "isBase": false,
    "CODE": "J",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Joule"
    ],
    "printSymbols": [
      "J"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "W": {
    "isBase": false,
    "CODE": "W",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Watt"
    ],
    "printSymbols": [
      "W"
    ],
    "properties": [
      "power"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "A": {
    "isBase": false,
    "CODE": "A",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Ampère"
    ],
    "printSymbols": [
      "A"
    ],
    "properties": [
      "electric current"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "V": {
    "isBase": false,
    "CODE": "V",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Volt"
    ],
    "printSymbols": [
      "V"
    ],
    "properties": [
      "electric potential"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "F": {
    "isBase": false,
    "CODE": "F",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Farad"
    ],
    "printSymbols": [
      "F"
    ],
    "properties": [
      "electric capacitance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Ohm": {
    "isBase": false,
    "CODE": "OHM",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Ohm"
    ],
    "printSymbols": [
      "&#937;"
    ],
    "properties": [
      "electric resistance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "S": {
    "isBase": false,
    "CODE": "SIE",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Siemens"
    ],
    "printSymbols": [
      "S"
    ],
    "properties": [
      "electric conductance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Wb": {
    "isBase": false,
    "CODE": "WB",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Weber"
    ],
    "printSymbols": [
      "Wb"
    ],
    "properties": [
      "magentic flux"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Cel": {
    "isBase": false,
    "CODE": "CEL",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "si",
    "names": [
      "degree Celsius"
    ],
    "printSymbols": [
      "&#176;C"
    ],
    "properties": [
      "temperature"
    ],
    "values": [
      {
        "printable": "<function name=\"Cel\" value=\"1\" Unit=\"K\"/>",
        "numeric": null
      }
    ]
  },
  "T": {
    "isBase": false,
    "CODE": "T",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Tesla"
    ],
    "printSymbols": [
      "T"
    ],
    "properties": [
      "magnetic flux density"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "H": {
    "isBase": false,
    "CODE": "H",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Henry"
    ],
    "printSymbols": [
      "H"
    ],
    "properties": [
      "inductance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "lm": {
    "isBase": false,
    "CODE": "LM",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "lumen"
    ],
    "printSymbols": [
      "lm"
    ],
    "properties": [
      "luminous flux"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "lx": {
    "isBase": false,
    "CODE": "LX",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "lux"
    ],
    "printSymbols": [
      "lx"
    ],
    "properties": [
      "illuminance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Bq": {
    "isBase": false,
    "CODE": "BQ",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Becquerel"
    ],
    "printSymbols": [
      "Bq"
    ],
    "properties": [
      "radioactivity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Gy": {
    "isBase": false,
    "CODE": "GY",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Gray"
    ],
    "printSymbols": [
      "Gy"
    ],
    "properties": [
      "energy dose"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Sv": {
    "isBase": false,
    "CODE": "SV",
    "isMetric": "yes",
    "class": "si",
    "names": [
      "Sievert"
    ],
    "printSymbols": [
      "Sv"
    ],
    "properties": [
      "dose equivalent"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "gon": {
    "isBase": false,
    "CODE": "GON",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "gon",
      "grade"
    ],
    "printSymbols": [
      "&#9633;<sup>g</sup>"
    ],
    "properties": [
      "plane angle"
    ],
    "values": [
      {
        "printable": "0.9",
        "numeric": 0.9
      }
    ]
  },
  "deg": {
    "isBase": false,
    "CODE": "DEG",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "degree"
    ],
    "printSymbols": [
      "&#176;"
    ],
    "properties": [
      "plane angle"
    ],
    "values": [
      {
        "printable": "2",
        "numeric": 2
      }
    ]
  },
  "'": {
    "isBase": false,
    "CODE": "'",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "minute"
    ],
    "printSymbols": [
      "'"
    ],
    "properties": [
      "plane angle"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "''": {
    "isBase": false,
    "CODE": "''",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "second"
    ],
    "printSymbols": [
      "''"
    ],
    "properties": [
      "plane angle"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "l": {
    "isBase": false,
    "CODE": "L",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "liter"
    ],
    "printSymbols": [
      "l"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "L": {
    "isBase": false,
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "liter"
    ],
    "printSymbols": [
      "L"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "ar": {
    "isBase": false,
    "CODE": "AR",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "are"
    ],
    "printSymbols": [
      "a"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "min": {
    "isBase": false,
    "CODE": "MIN",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "minute"
    ],
    "printSymbols": [
      "min"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "60",
        "numeric": 60
      }
    ]
  },
  "h": {
    "isBase": false,
    "CODE": "HR",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "hour"
    ],
    "printSymbols": [
      "h"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "60",
        "numeric": 60
      }
    ]
  },
  "d": {
    "isBase": false,
    "CODE": "D",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "day"
    ],
    "printSymbols": [
      "d"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "24",
        "numeric": 24
      }
    ]
  },
  "a_t": {
    "isBase": false,
    "CODE": "ANN_T",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "tropical year"
    ],
    "printSymbols": [
      "a<sub>t</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "365.24219",
        "numeric": 365.24219
      }
    ]
  },
  "a_j": {
    "isBase": false,
    "CODE": "ANN_J",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "mean Julian year"
    ],
    "printSymbols": [
      "a<sub>j</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "365.25",
        "numeric": 365.25
      }
    ]
  },
  "a_g": {
    "isBase": false,
    "CODE": "ANN_G",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "mean Gregorian year"
    ],
    "printSymbols": [
      "a<sub>g</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "365.2425",
        "numeric": 365.2425
      }
    ]
  },
  "a": {
    "isBase": false,
    "CODE": "ANN",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "year"
    ],
    "printSymbols": [
      "a"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "wk": {
    "isBase": false,
    "CODE": "WK",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "week"
    ],
    "printSymbols": [
      "wk"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "7",
        "numeric": 7
      }
    ]
  },
  "mo_s": {
    "isBase": false,
    "CODE": "MO_S",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "synodal month"
    ],
    "printSymbols": [
      "mo<sub>s</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "29.53059",
        "numeric": 29.53059
      }
    ]
  },
  "mo_j": {
    "isBase": false,
    "CODE": "MO_J",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "mean Julian month"
    ],
    "printSymbols": [
      "mo<sub>j</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "mo_g": {
    "isBase": false,
    "CODE": "MO_G",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "mean Gregorian month"
    ],
    "printSymbols": [
      "mo<sub>g</sub>"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "mo": {
    "isBase": false,
    "CODE": "MO",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "month"
    ],
    "printSymbols": [
      "mo"
    ],
    "properties": [
      "time"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "t": {
    "isBase": false,
    "CODE": "TNE",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "tonne"
    ],
    "printSymbols": [
      "t"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>3</sup>",
        "numeric": 1000
      }
    ]
  },
  "bar": {
    "isBase": false,
    "CODE": "BAR",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "bar"
    ],
    "printSymbols": [
      "bar"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>5</sup>",
        "numeric": 100000
      }
    ]
  },
  "u": {
    "isBase": false,
    "CODE": "AMU",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "unified atomic mass unit"
    ],
    "printSymbols": [
      "u"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "1.6605402 &#215; 10<sup>-24</sup>",
        "numeric": 1.6605402e-24
      }
    ]
  },
  "eV": {
    "isBase": false,
    "CODE": "EV",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "electronvolt"
    ],
    "printSymbols": [
      "eV"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "AU": {
    "isBase": false,
    "CODE": "ASU",
    "isMetric": "no",
    "class": "iso1000",
    "names": [
      "astronomic unit"
    ],
    "printSymbols": [
      "AU"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "149597.870691",
        "numeric": 149597.870691
      }
    ]
  },
  "pc": {
    "isBase": false,
    "CODE": "PRS",
    "isMetric": "yes",
    "class": "iso1000",
    "names": [
      "parsec"
    ],
    "printSymbols": [
      "pc"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "3.085678 &#215; 10<sup>16</sup>",
        "numeric": 30856780000000000
      }
    ]
  },
  "[c]": {
    "isBase": false,
    "CODE": "[C]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "velocity of light"
    ],
    "printSymbols": [
      "<i>c</i>"
    ],
    "properties": [
      "velocity"
    ],
    "values": [
      {
        "printable": "299792458",
        "numeric": 299792458
      }
    ]
  },
  "[h]": {
    "isBase": false,
    "CODE": "[H]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "Planck constant"
    ],
    "printSymbols": [
      "<i>h</i>"
    ],
    "properties": [
      "action"
    ],
    "values": [
      {
        "printable": "6.6260755 &#215; 10<sup>-24</sup>",
        "numeric": 6.6260755e-24
      }
    ]
  },
  "[k]": {
    "isBase": false,
    "CODE": "[K]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "Boltzmann constant"
    ],
    "printSymbols": [
      "<i>k</i>"
    ],
    "properties": [
      "(unclassified)"
    ],
    "values": [
      {
        "printable": "1.380658 &#215; 10<sup>-23</sup>",
        "numeric": 1.380658e-23
      }
    ]
  },
  "[eps_0]": {
    "isBase": false,
    "CODE": "[EPS_0]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "permittivity of vacuum"
    ],
    "printSymbols": [
      "<i>&#949;<sub>\n               <r>0</r>\n            </sub>\n         </i>"
    ],
    "properties": [
      "electric permittivity"
    ],
    "values": [
      {
        "printable": "8.854187817 &#215; 10<sup>-12</sup>",
        "numeric": 8.854187817e-12
      }
    ]
  },
  "[mu_0]": {
    "isBase": false,
    "CODE": "[MU_0]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "permeability of vacuum"
    ],
    "printSymbols": [
      "<i>&#956;<sub>\n               <r>0</r>\n            </sub>\n         </i>"
    ],
    "properties": [
      "magnetic permeability"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[e]": {
    "isBase": false,
    "CODE": "[E]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "elementary charge"
    ],
    "printSymbols": [
      "<i>e</i>"
    ],
    "properties": [
      "electric charge"
    ],
    "values": [
      {
        "printable": "1.60217733 &#215; 10<sup>-19</sup>",
        "numeric": 1.60217733e-19
      }
    ]
  },
  "[m_e]": {
    "isBase": false,
    "CODE": "[M_E]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "electron mass"
    ],
    "printSymbols": [
      "<i>m<sub>\n               <r>e</r>\n            </sub>\n         </i>"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "9.1093897 &#215; 10<sup>-28</sup>",
        "numeric": 9.1093897e-28
      }
    ]
  },
  "[m_p]": {
    "isBase": false,
    "CODE": "[M_P]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "proton mass"
    ],
    "printSymbols": [
      "<i>m<sub>\n               <r>p</r>\n            </sub>\n         </i>"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "1.6726231 &#215; 10<sup>-24</sup>",
        "numeric": 1.6726231e-24
      }
    ]
  },
  "[G]": {
    "isBase": false,
    "CODE": "[GC]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "Newtonian constant of gravitation"
    ],
    "printSymbols": [
      "<i>G</i>"
    ],
    "properties": [
      "(unclassified)"
    ],
    "values": [
      {
        "printable": "6.67259 &#215; 10<sup>-11</sup>",
        "numeric": 6.67259e-11
      }
    ]
  },
  "[g]": {
    "isBase": false,
    "CODE": "[G]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "standard acceleration of free fall"
    ],
    "printSymbols": [
      "<i>g<sub>n</sub>\n         </i>"
    ],
    "properties": [
      "acceleration"
    ],
    "values": [
      {
        "printable": "9.80665",
        "numeric": 9.80665
      }
    ]
  },
  "atm": {
    "isBase": false,
    "CODE": "ATM",
    "isMetric": "no",
    "class": "const",
    "names": [
      "standard atmosphere"
    ],
    "printSymbols": [
      "atm"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "101325",
        "numeric": 101325
      }
    ]
  },
  "[ly]": {
    "isBase": false,
    "CODE": "[LY]",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "light-year"
    ],
    "printSymbols": [
      "l.y."
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "gf": {
    "isBase": false,
    "CODE": "GF",
    "isMetric": "yes",
    "class": "const",
    "names": [
      "gram-force"
    ],
    "printSymbols": [
      "gf"
    ],
    "properties": [
      "force"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[lbf_av]": {
    "isBase": false,
    "CODE": "[LBF_AV]",
    "isMetric": "no",
    "class": "const",
    "names": [
      "pound force"
    ],
    "printSymbols": [
      "lbf"
    ],
    "properties": [
      "force"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Ky": {
    "isBase": false,
    "CODE": "KY",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Kayser"
    ],
    "printSymbols": [
      "K"
    ],
    "properties": [
      "lineic number"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Gal": {
    "isBase": false,
    "CODE": "GL",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Gal"
    ],
    "printSymbols": [
      "Gal"
    ],
    "properties": [
      "acceleration"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "dyn": {
    "isBase": false,
    "CODE": "DYN",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "dyne"
    ],
    "printSymbols": [
      "dyn"
    ],
    "properties": [
      "force"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "erg": {
    "isBase": false,
    "CODE": "ERG",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "erg"
    ],
    "printSymbols": [
      "erg"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "P": {
    "isBase": false,
    "CODE": "P",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Poise"
    ],
    "printSymbols": [
      "P"
    ],
    "properties": [
      "dynamic viscosity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Bi": {
    "isBase": false,
    "CODE": "BI",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Biot"
    ],
    "printSymbols": [
      "Bi"
    ],
    "properties": [
      "electric current"
    ],
    "values": [
      {
        "printable": "10",
        "numeric": 10
      }
    ]
  },
  "St": {
    "isBase": false,
    "CODE": "ST",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Stokes"
    ],
    "printSymbols": [
      "St"
    ],
    "properties": [
      "kinematic viscosity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Mx": {
    "isBase": false,
    "CODE": "MX",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Maxwell"
    ],
    "printSymbols": [
      "Mx"
    ],
    "properties": [
      "flux of magnetic induction"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-8</sup>",
        "numeric": 1e-8
      }
    ]
  },
  "G": {
    "isBase": false,
    "CODE": "GS",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Gauss"
    ],
    "printSymbols": [
      "Gs"
    ],
    "properties": [
      "magnetic flux density"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-4</sup>",
        "numeric": 0.0001
      }
    ]
  },
  "Oe": {
    "isBase": false,
    "CODE": "OE",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Oersted"
    ],
    "printSymbols": [
      "Oe"
    ],
    "properties": [
      "magnetic field intensity"
    ],
    "values": [
      {
        "printable": "250",
        "numeric": 250
      }
    ]
  },
  "Gb": {
    "isBase": false,
    "CODE": "GB",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Gilbert"
    ],
    "printSymbols": [
      "Gb"
    ],
    "properties": [
      "magnetic tension"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "sb": {
    "isBase": false,
    "CODE": "SB",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "stilb"
    ],
    "printSymbols": [
      "sb"
    ],
    "properties": [
      "lum. intensity density"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Lmb": {
    "isBase": false,
    "CODE": "LMB",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Lambert"
    ],
    "printSymbols": [
      "L"
    ],
    "properties": [
      "brightness"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "ph": {
    "isBase": false,
    "CODE": "PHT",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "phot"
    ],
    "printSymbols": [
      "ph"
    ],
    "properties": [
      "illuminance"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-4</sup>",
        "numeric": 0.0001
      }
    ]
  },
  "Ci": {
    "isBase": false,
    "CODE": "CI",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Curie"
    ],
    "printSymbols": [
      "Ci"
    ],
    "properties": [
      "radioactivity"
    ],
    "values": [
      {
        "printable": "3.7 &#215; 10<sup>10</sup>",
        "numeric": 37000000000
      }
    ]
  },
  "R": {
    "isBase": false,
    "CODE": "ROE",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "Roentgen"
    ],
    "printSymbols": [
      "R"
    ],
    "properties": [
      "ion dose"
    ],
    "values": [
      {
        "printable": "2.58 &#215; 10<sup>-4</sup>",
        "numeric": 0.000258
      }
    ]
  },
  "RAD": {
    "isBase": false,
    "CODE": "[RAD]",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "radiation absorbed dose"
    ],
    "printSymbols": [
      "RAD"
    ],
    "properties": [
      "energy dose"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "REM": {
    "isBase": false,
    "CODE": "[REM]",
    "isMetric": "yes",
    "class": "cgs",
    "names": [
      "radiation equivalent man"
    ],
    "printSymbols": [
      "REM"
    ],
    "properties": [
      "dose equivalent"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[in_i]": {
    "isBase": false,
    "CODE": "[IN_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "inch"
    ],
    "printSymbols": [
      "in"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "2.54",
        "numeric": 2.54
      }
    ]
  },
  "[ft_i]": {
    "isBase": false,
    "CODE": "[FT_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "foot"
    ],
    "printSymbols": [
      "ft"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[yd_i]": {
    "isBase": false,
    "CODE": "[YD_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "yard"
    ],
    "printSymbols": [
      "yd"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "3",
        "numeric": 3
      }
    ]
  },
  "[mi_i]": {
    "isBase": false,
    "CODE": "[MI_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "statute mile"
    ],
    "printSymbols": [
      "mi"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "5280",
        "numeric": 5280
      }
    ]
  },
  "[fth_i]": {
    "isBase": false,
    "CODE": "[FTH_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "fathom"
    ],
    "printSymbols": [
      "fth"
    ],
    "properties": [
      "depth of water"
    ],
    "values": [
      {
        "printable": "6",
        "numeric": 6
      }
    ]
  },
  "[nmi_i]": {
    "isBase": false,
    "CODE": "[NMI_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "nautical mile"
    ],
    "printSymbols": [
      "n.mi"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1852",
        "numeric": 1852
      }
    ]
  },
  "[kn_i]": {
    "isBase": false,
    "CODE": "[KN_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "knot"
    ],
    "printSymbols": [
      "knot"
    ],
    "properties": [
      "velocity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[sin_i]": {
    "isBase": false,
    "CODE": "[SIN_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "square inch"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[sft_i]": {
    "isBase": false,
    "CODE": "[SFT_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "square foot"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[syd_i]": {
    "isBase": false,
    "CODE": "[SYD_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "square yard"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[cin_i]": {
    "isBase": false,
    "CODE": "[CIN_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "cubic inch"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[cft_i]": {
    "isBase": false,
    "CODE": "[CFT_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "cubic foot"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[cyd_i]": {
    "isBase": false,
    "CODE": "[CYD_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "cubic yard"
    ],
    "printSymbols": [
      "cu.yd"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[bf_i]": {
    "isBase": false,
    "CODE": "[BF_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "board foot"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "144",
        "numeric": 144
      }
    ]
  },
  "[cr_i]": {
    "isBase": false,
    "CODE": "[CR_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "cord"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "128",
        "numeric": 128
      }
    ]
  },
  "[mil_i]": {
    "isBase": false,
    "CODE": "[MIL_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "mil"
    ],
    "printSymbols": [
      "mil"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-3</sup>",
        "numeric": 0.001
      }
    ]
  },
  "[cml_i]": {
    "isBase": false,
    "CODE": "[CML_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "circular mil"
    ],
    "printSymbols": [
      "circ.mil"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[hd_i]": {
    "isBase": false,
    "CODE": "[HD_I]",
    "isMetric": "no",
    "class": "intcust",
    "names": [
      "hand"
    ],
    "printSymbols": [
      "hd"
    ],
    "properties": [
      "height of horses"
    ],
    "values": [
      {
        "printable": "4",
        "numeric": 4
      }
    ]
  },
  "[ft_us]": {
    "isBase": false,
    "CODE": "[FT_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "foot"
    ],
    "printSymbols": [
      "ft<sub>us</sub>"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1200",
        "numeric": 1200
      }
    ]
  },
  "[yd_us]": {
    "isBase": false,
    "CODE": "[YD_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "yard"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "3",
        "numeric": 3
      }
    ]
  },
  "[in_us]": {
    "isBase": false,
    "CODE": "[IN_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "inch"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[rd_us]": {
    "isBase": false,
    "CODE": "[RD_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "rod"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "16.5",
        "numeric": 16.5
      }
    ]
  },
  "[ch_us]": {
    "isBase": false,
    "CODE": "[CH_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "Gunter's chain",
      "Surveyor's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "4",
        "numeric": 4
      }
    ]
  },
  "[lk_us]": {
    "isBase": false,
    "CODE": "[LK_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "link for Gunter's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[rch_us]": {
    "isBase": false,
    "CODE": "[RCH_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "Ramden's chain",
      "Engineer's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "[rlk_us]": {
    "isBase": false,
    "CODE": "[RLK_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "link for Ramden's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[fth_us]": {
    "isBase": false,
    "CODE": "[FTH_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "fathom"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "6",
        "numeric": 6
      }
    ]
  },
  "[fur_us]": {
    "isBase": false,
    "CODE": "[FUR_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "furlong"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "40",
        "numeric": 40
      }
    ]
  },
  "[mi_us]": {
    "isBase": false,
    "CODE": "[MI_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "mile"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "8",
        "numeric": 8
      }
    ]
  },
  "[acr_us]": {
    "isBase": false,
    "CODE": "[ACR_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "acre"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "160",
        "numeric": 160
      }
    ]
  },
  "[srd_us]": {
    "isBase": false,
    "CODE": "[SRD_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "square rod"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[smi_us]": {
    "isBase": false,
    "CODE": "[SMI_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "square mile"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[sct]": {
    "isBase": false,
    "CODE": "[SCT]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "section"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[twp]": {
    "isBase": false,
    "CODE": "[TWP]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "township"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "36",
        "numeric": 36
      }
    ]
  },
  "[mil_us]": {
    "isBase": false,
    "CODE": "[MIL_US]",
    "isMetric": "no",
    "class": "us-lengths",
    "names": [
      "mil"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1 &#215; 10<sup>-3</sup>",
        "numeric": 0.001
      }
    ]
  },
  "[in_br]": {
    "isBase": false,
    "CODE": "[IN_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "inch"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "2.539998",
        "numeric": 2.539998
      }
    ]
  },
  "[ft_br]": {
    "isBase": false,
    "CODE": "[FT_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "foot"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[rd_br]": {
    "isBase": false,
    "CODE": "[RD_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "rod"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "16.5",
        "numeric": 16.5
      }
    ]
  },
  "[ch_br]": {
    "isBase": false,
    "CODE": "[CH_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "Gunter's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "4",
        "numeric": 4
      }
    ]
  },
  "[lk_br]": {
    "isBase": false,
    "CODE": "[LK_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "link for Gunter's chain"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[fth_br]": {
    "isBase": false,
    "CODE": "[FTH_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "fathom"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "6",
        "numeric": 6
      }
    ]
  },
  "[pc_br]": {
    "isBase": false,
    "CODE": "[PC_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "pace"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "2.5",
        "numeric": 2.5
      }
    ]
  },
  "[yd_br]": {
    "isBase": false,
    "CODE": "[YD_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "yard"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "3",
        "numeric": 3
      }
    ]
  },
  "[mi_br]": {
    "isBase": false,
    "CODE": "[MI_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "mile"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "5280",
        "numeric": 5280
      }
    ]
  },
  "[nmi_br]": {
    "isBase": false,
    "CODE": "[NMI_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "nautical mile"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "6080",
        "numeric": 6080
      }
    ]
  },
  "[kn_br]": {
    "isBase": false,
    "CODE": "[KN_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "knot"
    ],
    "properties": [
      "velocity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[acr_br]": {
    "isBase": false,
    "CODE": "[ACR_BR]",
    "isMetric": "no",
    "class": "brit-length",
    "names": [
      "acre"
    ],
    "properties": [
      "area"
    ],
    "values": [
      {
        "printable": "4840",
        "numeric": 4840
      }
    ]
  },
  "[gal_us]": {
    "isBase": false,
    "CODE": "[GAL_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "Queen Anne's wine gallon"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "231",
        "numeric": 231
      }
    ]
  },
  "[bbl_us]": {
    "isBase": false,
    "CODE": "[BBL_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "barrel"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "42",
        "numeric": 42
      }
    ]
  },
  "[qt_us]": {
    "isBase": false,
    "CODE": "[QT_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "quart"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pt_us]": {
    "isBase": false,
    "CODE": "[PT_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "pint"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[gil_us]": {
    "isBase": false,
    "CODE": "[GIL_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "gill"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[foz_us]": {
    "isBase": false,
    "CODE": "[FOZ_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "fluid ounce"
    ],
    "printSymbols": [
      "oz fl"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[fdr_us]": {
    "isBase": false,
    "CODE": "[FDR_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "fluid dram"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[min_us]": {
    "isBase": false,
    "CODE": "[MIN_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "minim"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[crd_us]": {
    "isBase": false,
    "CODE": "[CRD_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "cord"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "128",
        "numeric": 128
      }
    ]
  },
  "[bu_us]": {
    "isBase": false,
    "CODE": "[BU_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "bushel"
    ],
    "properties": [
      "dry volume"
    ],
    "values": [
      {
        "printable": "2150.42",
        "numeric": 2150.42
      }
    ]
  },
  "[gal_wi]": {
    "isBase": false,
    "CODE": "[GAL_WI]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "historical winchester gallon"
    ],
    "properties": [
      "dry volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pk_us]": {
    "isBase": false,
    "CODE": "[PK_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "peck"
    ],
    "properties": [
      "dry volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[dqt_us]": {
    "isBase": false,
    "CODE": "[DQT_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "dry quart"
    ],
    "properties": [
      "dry volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[dpt_us]": {
    "isBase": false,
    "CODE": "[DPT_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "dry pint"
    ],
    "properties": [
      "dry volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[tbs_us]": {
    "isBase": false,
    "CODE": "[TBS_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "tablespoon"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[tsp_us]": {
    "isBase": false,
    "CODE": "[TSP_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "teaspoon"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[cup_us]": {
    "isBase": false,
    "CODE": "[CUP_US]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "cup"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "16",
        "numeric": 16
      }
    ]
  },
  "[foz_m]": {
    "isBase": false,
    "CODE": "[FOZ_M]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "metric fluid ounce"
    ],
    "printSymbols": [
      "oz fl"
    ],
    "properties": [
      "fluid volume"
    ],
    "values": [
      {
        "printable": "30",
        "numeric": 30
      }
    ]
  },
  "[cup_m]": {
    "isBase": false,
    "CODE": "[CUP_M]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "metric cup"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "240",
        "numeric": 240
      }
    ]
  },
  "[tsp_m]": {
    "isBase": false,
    "CODE": "[TSP_M]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "metric teaspoon"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "5",
        "numeric": 5
      }
    ]
  },
  "[tbs_m]": {
    "isBase": false,
    "CODE": "[TBS_M]",
    "isMetric": "no",
    "class": "us-volumes",
    "names": [
      "metric tablespoon"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "15",
        "numeric": 15
      }
    ]
  },
  "[gal_br]": {
    "isBase": false,
    "CODE": "[GAL_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "gallon"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "4.54609",
        "numeric": 4.54609
      }
    ]
  },
  "[pk_br]": {
    "isBase": false,
    "CODE": "[PK_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "peck"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "2",
        "numeric": 2
      }
    ]
  },
  "[bu_br]": {
    "isBase": false,
    "CODE": "[BU_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "bushel"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "4",
        "numeric": 4
      }
    ]
  },
  "[qt_br]": {
    "isBase": false,
    "CODE": "[QT_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "quart"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pt_br]": {
    "isBase": false,
    "CODE": "[PT_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "pint"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[gil_br]": {
    "isBase": false,
    "CODE": "[GIL_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "gill"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[foz_br]": {
    "isBase": false,
    "CODE": "[FOZ_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "fluid ounce"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[fdr_br]": {
    "isBase": false,
    "CODE": "[FDR_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "fluid dram"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[min_br]": {
    "isBase": false,
    "CODE": "[MIN_BR]",
    "isMetric": "no",
    "class": "brit-volumes",
    "names": [
      "minim"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[gr]": {
    "isBase": false,
    "CODE": "[GR]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "grain"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "64.79891",
        "numeric": 64.79891
      }
    ]
  },
  "[lb_av]": {
    "isBase": false,
    "CODE": "[LB_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "pound"
    ],
    "printSymbols": [
      "lb"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "7000",
        "numeric": 7000
      }
    ]
  },
  "[oz_av]": {
    "isBase": false,
    "CODE": "[OZ_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "ounce"
    ],
    "printSymbols": [
      "oz"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[dr_av]": {
    "isBase": false,
    "CODE": "[DR_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "dram"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[scwt_av]": {
    "isBase": false,
    "CODE": "[SCWT_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "short hundredweight",
      "U.S. hundredweight"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "[lcwt_av]": {
    "isBase": false,
    "CODE": "[LCWT_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "long hundredweight",
      "British hundredweight"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "112",
        "numeric": 112
      }
    ]
  },
  "[ston_av]": {
    "isBase": false,
    "CODE": "[STON_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "short ton",
      "U.S. ton"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "20",
        "numeric": 20
      }
    ]
  },
  "[lton_av]": {
    "isBase": false,
    "CODE": "[LTON_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "long ton",
      "British ton"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "20",
        "numeric": 20
      }
    ]
  },
  "[stone_av]": {
    "isBase": false,
    "CODE": "[STONE_AV]",
    "isMetric": "no",
    "class": "avoirdupois",
    "names": [
      "stone",
      "British stone"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "14",
        "numeric": 14
      }
    ]
  },
  "[pwt_tr]": {
    "isBase": false,
    "CODE": "[PWT_TR]",
    "isMetric": "no",
    "class": "troy",
    "names": [
      "pennyweight"
    ],
    "printSymbols": [
      "dwt"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "24",
        "numeric": 24
      }
    ]
  },
  "[oz_tr]": {
    "isBase": false,
    "CODE": "[OZ_TR]",
    "isMetric": "no",
    "class": "troy",
    "names": [
      "troy ounce"
    ],
    "printSymbols": [
      "oz t"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "20",
        "numeric": 20
      }
    ]
  },
  "[lb_tr]": {
    "isBase": false,
    "CODE": "[LB_TR]",
    "isMetric": "no",
    "class": "troy",
    "names": [
      "troy pound"
    ],
    "printSymbols": [
      "lb t"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[sc_ap]": {
    "isBase": false,
    "CODE": "[SC_AP]",
    "isMetric": "no",
    "class": "apoth",
    "names": [
      "scruple"
    ],
    "printSymbols": [
      "&#8456;"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "20",
        "numeric": 20
      }
    ]
  },
  "[dr_ap]": {
    "isBase": false,
    "CODE": "[DR_AP]",
    "isMetric": "no",
    "class": "apoth",
    "names": [
      "dram",
      "drachm"
    ],
    "printSymbols": [
      "&#658;"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "3",
        "numeric": 3
      }
    ]
  },
  "[oz_ap]": {
    "isBase": false,
    "CODE": "[OZ_AP]",
    "isMetric": "no",
    "class": "apoth",
    "names": [
      "ounce"
    ],
    "printSymbols": [
      "&#8485;"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "8",
        "numeric": 8
      }
    ]
  },
  "[lb_ap]": {
    "isBase": false,
    "CODE": "[LB_AP]",
    "isMetric": "no",
    "class": "apoth",
    "names": [
      "pound"
    ],
    "printSymbols": [
      "<strike>lb</strike>"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[oz_m]": {
    "isBase": false,
    "CODE": "[OZ_M]",
    "isMetric": "no",
    "class": "apoth",
    "names": [
      "metric ounce"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "28",
        "numeric": 28
      }
    ]
  },
  "[lne]": {
    "isBase": false,
    "CODE": "[LNE]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "line"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pnt]": {
    "isBase": false,
    "CODE": "[PNT]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "point"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pca]": {
    "isBase": false,
    "CODE": "[PCA]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "pica"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[pnt_pr]": {
    "isBase": false,
    "CODE": "[PNT_PR]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "Printer's point"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "0.013837",
        "numeric": 0.013837
      }
    ]
  },
  "[pca_pr]": {
    "isBase": false,
    "CODE": "[PCA_PR]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "Printer's pica"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[pied]": {
    "isBase": false,
    "CODE": "[PIED]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "pied",
      "French foot"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "32.48",
        "numeric": 32.48
      }
    ]
  },
  "[pouce]": {
    "isBase": false,
    "CODE": "[POUCE]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "pouce",
      "French inch"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ligne]": {
    "isBase": false,
    "CODE": "[LIGNE]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "ligne",
      "French line"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[didot]": {
    "isBase": false,
    "CODE": "[DIDOT]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "didot",
      "Didot's point"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[cicero]": {
    "isBase": false,
    "CODE": "[CICERO]",
    "isMetric": "no",
    "class": "typeset",
    "names": [
      "cicero",
      "Didot's pica"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "12",
        "numeric": 12
      }
    ]
  },
  "[degF]": {
    "isBase": false,
    "CODE": "[DEGF]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "heat",
    "names": [
      "degree Fahrenheit"
    ],
    "printSymbols": [
      "&#176;F"
    ],
    "properties": [
      "temperature"
    ],
    "values": [
      {
        "printable": "<function name=\"degF\" value=\"5\" Unit=\"K/9\"/>",
        "numeric": null
      }
    ]
  },
  "[degR]": {
    "isBase": false,
    "CODE": "[degR]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "degree Rankine"
    ],
    "printSymbols": [
      "&#176;R"
    ],
    "properties": [
      "temperature"
    ],
    "values": [
      {
        "printable": "5",
        "numeric": 5
      }
    ]
  },
  "cal_[15]": {
    "isBase": false,
    "CODE": "CAL_[15]",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "calorie at 15 °C"
    ],
    "printSymbols": [
      "cal<sub>15&#176;C</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "4.18580",
        "numeric": 4.1858
      }
    ]
  },
  "cal_[20]": {
    "isBase": false,
    "CODE": "CAL_[20]",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "calorie at 20 °C"
    ],
    "printSymbols": [
      "cal<sub>20&#176;C</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "4.18190",
        "numeric": 4.1819
      }
    ]
  },
  "cal_m": {
    "isBase": false,
    "CODE": "CAL_M",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "mean calorie"
    ],
    "printSymbols": [
      "cal<sub>m</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "4.19002",
        "numeric": 4.19002
      }
    ]
  },
  "cal_IT": {
    "isBase": false,
    "CODE": "CAL_IT",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "international table calorie"
    ],
    "printSymbols": [
      "cal<sub>IT</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "4.1868",
        "numeric": 4.1868
      }
    ]
  },
  "cal_th": {
    "isBase": false,
    "CODE": "CAL_TH",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "thermochemical calorie"
    ],
    "printSymbols": [
      "cal<sub>th</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "4.184",
        "numeric": 4.184
      }
    ]
  },
  "cal": {
    "isBase": false,
    "CODE": "CAL",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "calorie"
    ],
    "printSymbols": [
      "cal"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[Cal]": {
    "isBase": false,
    "CODE": "[CAL]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "nutrition label Calories"
    ],
    "printSymbols": [
      "Cal"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[Btu_39]": {
    "isBase": false,
    "CODE": "[BTU_39]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "British thermal unit at 39 °F"
    ],
    "printSymbols": [
      "Btu<sub>39&#176;F</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.05967",
        "numeric": 1.05967
      }
    ]
  },
  "[Btu_59]": {
    "isBase": false,
    "CODE": "[BTU_59]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "British thermal unit at 59 °F"
    ],
    "printSymbols": [
      "Btu<sub>59&#176;F</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.05480",
        "numeric": 1.0548
      }
    ]
  },
  "[Btu_60]": {
    "isBase": false,
    "CODE": "[BTU_60]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "British thermal unit at 60 °F"
    ],
    "printSymbols": [
      "Btu<sub>60&#176;F</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.05468",
        "numeric": 1.05468
      }
    ]
  },
  "[Btu_m]": {
    "isBase": false,
    "CODE": "[BTU_M]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "mean British thermal unit"
    ],
    "printSymbols": [
      "Btu<sub>m</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.05587",
        "numeric": 1.05587
      }
    ]
  },
  "[Btu_IT]": {
    "isBase": false,
    "CODE": "[BTU_IT]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "international table British thermal unit"
    ],
    "printSymbols": [
      "Btu<sub>IT</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.05505585262",
        "numeric": 1.05505585262
      }
    ]
  },
  "[Btu_th]": {
    "isBase": false,
    "CODE": "[BTU_TH]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "thermochemical British thermal unit"
    ],
    "printSymbols": [
      "Btu<sub>th</sub>"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1.054350",
        "numeric": 1.05435
      }
    ]
  },
  "[Btu]": {
    "isBase": false,
    "CODE": "[BTU]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "British thermal unit"
    ],
    "printSymbols": [
      "btu"
    ],
    "properties": [
      "energy"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[HP]": {
    "isBase": false,
    "CODE": "[HP]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "horsepower"
    ],
    "properties": [
      "power"
    ],
    "values": [
      {
        "printable": "550",
        "numeric": 550
      }
    ]
  },
  "tex": {
    "isBase": false,
    "CODE": "TEX",
    "isMetric": "yes",
    "class": "heat",
    "names": [
      "tex"
    ],
    "printSymbols": [
      "tex"
    ],
    "properties": [
      "linear mass density (of textile thread)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[den]": {
    "isBase": false,
    "CODE": "[DEN]",
    "isMetric": "no",
    "class": "heat",
    "names": [
      "Denier"
    ],
    "printSymbols": [
      "den"
    ],
    "properties": [
      "linear mass density (of textile thread)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "m[H2O]": {
    "isBase": false,
    "CODE": "M[H2O]",
    "isMetric": "yes",
    "class": "clinical",
    "names": [
      "meter of water column"
    ],
    "printSymbols": [
      "m&#160;H<sub>\n            <r>2</r>\n         </sub>O"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "9.80665",
        "numeric": 9.80665
      }
    ]
  },
  "m[Hg]": {
    "isBase": false,
    "CODE": "M[HG]",
    "isMetric": "yes",
    "class": "clinical",
    "names": [
      "meter of mercury column"
    ],
    "printSymbols": [
      "m&#160;Hg"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "133.3220",
        "numeric": 133.322
      }
    ]
  },
  "[in_i'H2O]": {
    "isBase": false,
    "CODE": "[IN_I'H2O]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "inch of water column"
    ],
    "printSymbols": [
      "in&#160;H<sub>\n            <r>2</r>\n         </sub>O"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[in_i'Hg]": {
    "isBase": false,
    "CODE": "[IN_I'HG]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "inch of mercury column"
    ],
    "printSymbols": [
      "in&#160;Hg"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[PRU]": {
    "isBase": false,
    "CODE": "[PRU]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "peripheral vascular resistance unit"
    ],
    "printSymbols": [
      "P.R.U."
    ],
    "properties": [
      "fluid resistance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[wood'U]": {
    "isBase": false,
    "CODE": "[WOOD'U]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "Wood unit"
    ],
    "printSymbols": [
      "Wood U."
    ],
    "properties": [
      "fluid resistance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[diop]": {
    "isBase": false,
    "CODE": "[DIOP]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "diopter"
    ],
    "printSymbols": [
      "dpt"
    ],
    "properties": [
      "refraction of a lens"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[p'diop]": {
    "isBase": false,
    "CODE": "[P'DIOP]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "prism diopter"
    ],
    "printSymbols": [
      "PD"
    ],
    "properties": [
      "refraction of a prism"
    ],
    "values": [
      {
        "printable": "<function name=\"tanTimes100\" value=\"1\" Unit=\"deg\"/>",
        "numeric": null
      }
    ]
  },
  "%[slope]": {
    "isBase": false,
    "CODE": "%[SLOPE]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "percent of slope"
    ],
    "printSymbols": [
      "%"
    ],
    "properties": [
      "slope"
    ],
    "values": [
      {
        "printable": "<function name=\"100tan\" value=\"1\" Unit=\"deg\"/>",
        "numeric": null
      }
    ]
  },
  "[mesh_i]": {
    "isBase": false,
    "CODE": "[MESH_I]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "mesh"
    ],
    "properties": [
      "lineic number"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[Ch]": {
    "isBase": false,
    "CODE": "[CH]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "Charrière",
      "french"
    ],
    "printSymbols": [
      "Ch"
    ],
    "properties": [
      "gauge of catheters"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[drp]": {
    "isBase": false,
    "CODE": "[DRP]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "drop"
    ],
    "printSymbols": [
      "drp"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[hnsf'U]": {
    "isBase": false,
    "CODE": "[HNSF'U]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "Hounsfield unit"
    ],
    "printSymbols": [
      "HF"
    ],
    "properties": [
      "x-ray attenuation"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[MET]": {
    "isBase": false,
    "CODE": "[MET]",
    "isMetric": "no",
    "class": "clinical",
    "names": [
      "metabolic equivalent"
    ],
    "printSymbols": [
      "MET"
    ],
    "properties": [
      "metabolic cost of physical activity"
    ],
    "values": [
      {
        "printable": "3.5",
        "numeric": 3.5
      }
    ]
  },
  "[hp'_X]": {
    "isBase": false,
    "CODE": "[HP'_X]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of decimal series (retired)"
    ],
    "printSymbols": [
      "X"
    ],
    "properties": [
      "homeopathic potency (retired)"
    ],
    "values": [
      {
        "printable": "<function name=\"hpX\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "[hp'_C]": {
    "isBase": false,
    "CODE": "[HP'_C]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of centesimal series (retired)"
    ],
    "printSymbols": [
      "C"
    ],
    "properties": [
      "homeopathic potency (retired)"
    ],
    "values": [
      {
        "printable": "<function name=\"hpC\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "[hp'_M]": {
    "isBase": false,
    "CODE": "[HP'_M]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of millesimal series (retired)"
    ],
    "printSymbols": [
      "M"
    ],
    "properties": [
      "homeopathic potency (retired)"
    ],
    "values": [
      {
        "printable": "<function name=\"hpM\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "[hp'_Q]": {
    "isBase": false,
    "CODE": "[HP'_Q]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of quintamillesimal series (retired)"
    ],
    "printSymbols": [
      "Q"
    ],
    "properties": [
      "homeopathic potency (retired)"
    ],
    "values": [
      {
        "printable": "<function name=\"hpQ\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "[hp_X]": {
    "isBase": false,
    "CODE": "[HP_X]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of decimal hahnemannian series"
    ],
    "printSymbols": [
      "X"
    ],
    "properties": [
      "homeopathic potency (Hahnemann)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[hp_C]": {
    "isBase": false,
    "CODE": "[HP_C]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of centesimal hahnemannian series"
    ],
    "printSymbols": [
      "C"
    ],
    "properties": [
      "homeopathic potency (Hahnemann)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[hp_M]": {
    "isBase": false,
    "CODE": "[HP_M]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of millesimal hahnemannian series"
    ],
    "printSymbols": [
      "M"
    ],
    "properties": [
      "homeopathic potency (Hahnemann)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[hp_Q]": {
    "isBase": false,
    "CODE": "[HP_Q]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of quintamillesimal hahnemannian series"
    ],
    "printSymbols": [
      "Q"
    ],
    "properties": [
      "homeopathic potency (Hahnemann)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[kp_X]": {
    "isBase": false,
    "CODE": "[KP_X]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of decimal korsakovian series"
    ],
    "printSymbols": [
      "X"
    ],
    "properties": [
      "homeopathic potency (Korsakov)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[kp_C]": {
    "isBase": false,
    "CODE": "[KP_C]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of centesimal korsakovian series"
    ],
    "printSymbols": [
      "C"
    ],
    "properties": [
      "homeopathic potency (Korsakov)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[kp_M]": {
    "isBase": false,
    "CODE": "[KP_M]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of millesimal korsakovian series"
    ],
    "printSymbols": [
      "M"
    ],
    "properties": [
      "homeopathic potency (Korsakov)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[kp_Q]": {
    "isBase": false,
    "CODE": "[KP_Q]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "clinical",
    "names": [
      "homeopathic potency of quintamillesimal korsakovian series"
    ],
    "printSymbols": [
      "Q"
    ],
    "properties": [
      "homeopathic potency (Korsakov)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "eq": {
    "isBase": false,
    "CODE": "EQ",
    "isMetric": "yes",
    "class": "chemical",
    "names": [
      "equivalents"
    ],
    "printSymbols": [
      "eq"
    ],
    "properties": [
      "amount of substance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "osm": {
    "isBase": false,
    "CODE": "OSM",
    "isMetric": "yes",
    "class": "chemical",
    "names": [
      "osmole"
    ],
    "printSymbols": [
      "osm"
    ],
    "properties": [
      "amount of substance (dissolved particles)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[pH]": {
    "isBase": false,
    "CODE": "[PH]",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "chemical",
    "names": [
      "pH"
    ],
    "printSymbols": [
      "pH"
    ],
    "properties": [
      "acidity"
    ],
    "values": [
      {
        "printable": "<function name=\"pH\" value=\"1\" Unit=\"mol/l\"/>",
        "numeric": null
      }
    ]
  },
  "g%": {
    "isBase": false,
    "CODE": "G%",
    "isMetric": "yes",
    "class": "chemical",
    "names": [
      "gram percent"
    ],
    "printSymbols": [
      "g%"
    ],
    "properties": [
      "mass concentration"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[S]": {
    "isBase": false,
    "CODE": "[S]",
    "isMetric": "no",
    "class": "chemical",
    "names": [
      "Svedberg unit"
    ],
    "printSymbols": [
      "S"
    ],
    "properties": [
      "sedimentation coefficient"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[HPF]": {
    "isBase": false,
    "CODE": "[HPF]",
    "isMetric": "no",
    "class": "chemical",
    "names": [
      "high power field"
    ],
    "printSymbols": [
      "HPF"
    ],
    "properties": [
      "view area in microscope"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[LPF]": {
    "isBase": false,
    "CODE": "[LPF]",
    "isMetric": "no",
    "class": "chemical",
    "names": [
      "low power field"
    ],
    "printSymbols": [
      "LPF"
    ],
    "properties": [
      "view area in microscope"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "kat": {
    "isBase": false,
    "CODE": "KAT",
    "isMetric": "yes",
    "class": "chemical",
    "names": [
      "katal"
    ],
    "printSymbols": [
      "kat"
    ],
    "properties": [
      "catalytic activity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "U": {
    "isBase": false,
    "CODE": "U",
    "isMetric": "yes",
    "class": "chemical",
    "names": [
      "Unit"
    ],
    "printSymbols": [
      "U"
    ],
    "properties": [
      "catalytic activity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[iU]": {
    "isBase": false,
    "CODE": "[IU]",
    "isMetric": "yes",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "international unit"
    ],
    "printSymbols": [
      "IU"
    ],
    "properties": [
      "arbitrary"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[IU]": {
    "isBase": false,
    "CODE": "[IU]",
    "isMetric": "yes",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "international unit"
    ],
    "printSymbols": [
      "i.U."
    ],
    "properties": [
      "arbitrary"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[arb'U]": {
    "isBase": false,
    "CODE": "[ARB'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "arbitary unit"
    ],
    "printSymbols": [
      "arb. U"
    ],
    "properties": [
      "arbitrary"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[USP'U]": {
    "isBase": false,
    "CODE": "[USP'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "United States Pharmacopeia unit"
    ],
    "printSymbols": [
      "U.S.P."
    ],
    "properties": [
      "arbitrary"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[GPL'U]": {
    "isBase": false,
    "CODE": "[GPL'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "GPL unit"
    ],
    "properties": [
      "biologic activity of anticardiolipin IgG"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[MPL'U]": {
    "isBase": false,
    "CODE": "[MPL'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "MPL unit"
    ],
    "properties": [
      "biologic activity of anticardiolipin IgM"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[APL'U]": {
    "isBase": false,
    "CODE": "[APL'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "APL unit"
    ],
    "properties": [
      "biologic activity of anticardiolipin IgA"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[beth'U]": {
    "isBase": false,
    "CODE": "[BETH'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Bethesda unit"
    ],
    "properties": [
      "biologic activity of factor VIII inhibitor"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[anti'Xa'U]": {
    "isBase": false,
    "CODE": "[ANTI'XA'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "anti factor Xa unit"
    ],
    "properties": [
      "biologic activity of factor Xa inhibitor (heparin)"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[todd'U]": {
    "isBase": false,
    "CODE": "[TODD'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Todd unit"
    ],
    "properties": [
      "biologic activity antistreptolysin O"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[dye'U]": {
    "isBase": false,
    "CODE": "[DYE'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Dye unit"
    ],
    "properties": [
      "biologic activity of amylase"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[smgy'U]": {
    "isBase": false,
    "CODE": "[SMGY'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Somogyi unit"
    ],
    "properties": [
      "biologic activity of amylase"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[bdsk'U]": {
    "isBase": false,
    "CODE": "[BDSK'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Bodansky unit"
    ],
    "properties": [
      "biologic activity of phosphatase"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ka'U]": {
    "isBase": false,
    "CODE": "[KA'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "King-Armstrong unit"
    ],
    "properties": [
      "biologic activity of phosphatase"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[knk'U]": {
    "isBase": false,
    "CODE": "[KNK'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Kunkel unit"
    ],
    "properties": [
      "arbitrary biologic activity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[mclg'U]": {
    "isBase": false,
    "CODE": "[MCLG'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Mac Lagan unit"
    ],
    "properties": [
      "arbitrary biologic activity"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[tb'U]": {
    "isBase": false,
    "CODE": "[TB'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "tuberculin unit"
    ],
    "properties": [
      "biologic activity of tuberculin"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[CCID_50]": {
    "isBase": false,
    "CODE": "[CCID_50]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "50% cell culture infectious dose"
    ],
    "printSymbols": [
      "CCID<sub>50</sub>"
    ],
    "properties": [
      "biologic activity (infectivity) of an infectious agent preparation"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[TCID_50]": {
    "isBase": false,
    "CODE": "[TCID_50]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "50% tissue culture infectious dose"
    ],
    "printSymbols": [
      "TCID<sub>50</sub>"
    ],
    "properties": [
      "biologic activity (infectivity) of an infectious agent preparation"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[EID_50]": {
    "isBase": false,
    "CODE": "[EID_50]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "50% embryo infectious dose"
    ],
    "printSymbols": [
      "EID<sub>50</sub>"
    ],
    "properties": [
      "biologic activity (infectivity) of an infectious agent preparation"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[PFU]": {
    "isBase": false,
    "CODE": "[PFU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "plaque forming units"
    ],
    "printSymbols": [
      "PFU"
    ],
    "properties": [
      "amount of an infectious agent"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[FFU]": {
    "isBase": false,
    "CODE": "[FFU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "focus forming units"
    ],
    "printSymbols": [
      "FFU"
    ],
    "properties": [
      "amount of an infectious agent"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[CFU]": {
    "isBase": false,
    "CODE": "[CFU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "colony forming units"
    ],
    "printSymbols": [
      "CFU"
    ],
    "properties": [
      "amount of a proliferating organism"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[BAU]": {
    "isBase": false,
    "CODE": "[BAU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "bioequivalent allergen unit"
    ],
    "printSymbols": [
      "BAU"
    ],
    "properties": [
      "amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[AU]": {
    "isBase": false,
    "CODE": "[AU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "allergen unit"
    ],
    "printSymbols": [
      "AU"
    ],
    "properties": [
      "procedure defined amount of an allergen using some reference standard"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[Amb'a'1'U]": {
    "isBase": false,
    "CODE": "[AMB'A'1'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "allergen unit for Ambrosia artemisiifolia"
    ],
    "printSymbols": [
      "Amb a 1 U"
    ],
    "properties": [
      "procedure defined amount of the major allergen of ragweed."
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[PNU]": {
    "isBase": false,
    "CODE": "[PNU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "protein nitrogen unit"
    ],
    "printSymbols": [
      "PNU"
    ],
    "properties": [
      "procedure defined amount of a protein substance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[Lf]": {
    "isBase": false,
    "CODE": "[LF]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Limit of flocculation"
    ],
    "printSymbols": [
      "Lf"
    ],
    "properties": [
      "procedure defined amount of an antigen substance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[D'ag'U]": {
    "isBase": false,
    "CODE": "[D'AG'U]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "D-antigen unit"
    ],
    "printSymbols": [
      ""
    ],
    "properties": [
      "procedure defined amount of a poliomyelitis d-antigen substance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[FEU]": {
    "isBase": false,
    "CODE": "[FEU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "fibrinogen equivalent unit"
    ],
    "printSymbols": [
      ""
    ],
    "properties": [
      "amount of fibrinogen broken down into the measured d-dimers"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[ELU]": {
    "isBase": false,
    "CODE": "[ELU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "ELISA unit"
    ],
    "printSymbols": [
      ""
    ],
    "properties": [
      "arbitrary ELISA unit"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[EU]": {
    "isBase": false,
    "CODE": "[EU]",
    "isMetric": "no",
    "isArbitrary": "yes",
    "class": "chemical",
    "names": [
      "Ehrlich unit"
    ],
    "printSymbols": [
      ""
    ],
    "properties": [
      "Ehrlich unit"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Np": {
    "isBase": false,
    "CODE": "NEP",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "neper"
    ],
    "printSymbols": [
      "Np"
    ],
    "properties": [
      "level"
    ],
    "values": [
      {
        "printable": "<function name=\"ln\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "B": {
    "isBase": false,
    "CODE": "B",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel"
    ],
    "printSymbols": [
      "B"
    ],
    "properties": [
      "level"
    ],
    "values": [
      {
        "printable": "<function name=\"lg\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "B[SPL]": {
    "isBase": false,
    "CODE": "B[SPL]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel sound pressure"
    ],
    "printSymbols": [
      "B(SPL)"
    ],
    "properties": [
      "pressure level"
    ],
    "values": [
      {
        "printable": "<function name=\"lgTimes2\" value=\"2\" Unit=\"10*-5.Pa\"/>",
        "numeric": null
      }
    ]
  },
  "B[V]": {
    "isBase": false,
    "CODE": "B[V]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel volt"
    ],
    "printSymbols": [
      "B(V)"
    ],
    "properties": [
      "electric potential level"
    ],
    "values": [
      {
        "printable": "<function name=\"lgTimes2\" value=\"1\" Unit=\"V\"/>",
        "numeric": null
      }
    ]
  },
  "B[mV]": {
    "isBase": false,
    "CODE": "B[MV]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel millivolt"
    ],
    "printSymbols": [
      "B(mV)"
    ],
    "properties": [
      "electric potential level"
    ],
    "values": [
      {
        "printable": "<function name=\"lgTimes2\" value=\"1\" Unit=\"mV\"/>",
        "numeric": null
      }
    ]
  },
  "B[uV]": {
    "isBase": false,
    "CODE": "B[UV]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel microvolt"
    ],
    "printSymbols": [
      "B(&#956;V)"
    ],
    "properties": [
      "electric potential level"
    ],
    "values": [
      {
        "printable": "<function name=\"lgTimes2\" value=\"1\" Unit=\"uV\"/>",
        "numeric": null
      }
    ]
  },
  "B[10.nV]": {
    "isBase": false,
    "CODE": "B[10.NV]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel 10 nanovolt"
    ],
    "printSymbols": [
      "B(10 nV)"
    ],
    "properties": [
      "electric potential level"
    ],
    "values": [
      {
        "printable": "<function name=\"lgTimes2\" value=\"10\" Unit=\"nV\"/>",
        "numeric": null
      }
    ]
  },
  "B[W]": {
    "isBase": false,
    "CODE": "B[W]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel watt"
    ],
    "printSymbols": [
      "B(W)"
    ],
    "properties": [
      "power level"
    ],
    "values": [
      {
        "printable": "<function name=\"lg\" value=\"1\" Unit=\"W\"/>",
        "numeric": null
      }
    ]
  },
  "B[kW]": {
    "isBase": false,
    "CODE": "B[KW]",
    "isMetric": "yes",
    "isSpecial": "yes",
    "class": "levels",
    "names": [
      "bel kilowatt"
    ],
    "printSymbols": [
      "B(kW)"
    ],
    "properties": [
      "power level"
    ],
    "values": [
      {
        "printable": "<function name=\"lg\" value=\"1\" Unit=\"kW\"/>",
        "numeric": null
      }
    ]
  },
  "st": {
    "isBase": false,
    "CODE": "STR",
    "isMetric": "yes",
    "class": "misc",
    "names": [
      "stere"
    ],
    "printSymbols": [
      "st"
    ],
    "properties": [
      "volume"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "Ao": {
    "isBase": false,
    "CODE": "AO",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "Ångström"
    ],
    "printSymbols": [
      "&#197;"
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "0.1",
        "numeric": 0.1
      }
    ]
  },
  "b": {
    "isBase": false,
    "CODE": "BRN",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "barn"
    ],
    "printSymbols": [
      "b"
    ],
    "properties": [
      "action area"
    ],
    "values": [
      {
        "printable": "100",
        "numeric": 100
      }
    ]
  },
  "att": {
    "isBase": false,
    "CODE": "ATT",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "technical atmosphere"
    ],
    "printSymbols": [
      "at"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "mho": {
    "isBase": false,
    "CODE": "MHO",
    "isMetric": "yes",
    "class": "misc",
    "names": [
      "mho"
    ],
    "printSymbols": [
      "mho"
    ],
    "properties": [
      "electric conductance"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[psi]": {
    "isBase": false,
    "CODE": "[PSI]",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "pound per sqare inch"
    ],
    "printSymbols": [
      "psi"
    ],
    "properties": [
      "pressure"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "circ": {
    "isBase": false,
    "CODE": "CIRC",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "circle"
    ],
    "printSymbols": [
      "circ"
    ],
    "properties": [
      "plane angle"
    ],
    "values": [
      {
        "printable": "2",
        "numeric": 2
      }
    ]
  },
  "sph": {
    "isBase": false,
    "CODE": "SPH",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "spere"
    ],
    "printSymbols": [
      "sph"
    ],
    "properties": [
      "solid angle"
    ],
    "values": [
      {
        "printable": "4",
        "numeric": 4
      }
    ]
  },
  "[car_m]": {
    "isBase": false,
    "CODE": "[CAR_M]",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "metric carat"
    ],
    "printSymbols": [
      "ct<sub>m</sub>"
    ],
    "properties": [
      "mass"
    ],
    "values": [
      {
        "printable": "0.2",
        "numeric": 0.2
      }
    ]
  },
  "[car_Au]": {
    "isBase": false,
    "CODE": "[CAR_AU]",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "carat of gold alloys"
    ],
    "printSymbols": [
      "ct<sub>\n            <r>Au</r>\n         </sub>"
    ],
    "properties": [
      "mass fraction"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "[smoot]": {
    "isBase": false,
    "CODE": "[SMOOT]",
    "isMetric": "no",
    "class": "misc",
    "names": [
      "Smoot"
    ],
    "printSymbols": [
      ""
    ],
    "properties": [
      "length"
    ],
    "values": [
      {
        "printable": "67",
        "numeric": 67
      }
    ]
  },
  "bit_s": {
    "isBase": false,
    "CODE": "BIT_S",
    "isMetric": "no",
    "isSpecial": "yes",
    "class": "infotech",
    "names": [
      "bit"
    ],
    "printSymbols": [
      "bit<sub>s</sub>"
    ],
    "properties": [
      "amount of information"
    ],
    "values": [
      {
        "printable": "<function name=\"ld\" value=\"1\" Unit=\"1\"/>",
        "numeric": null
      }
    ]
  },
  "bit": {
    "isBase": false,
    "CODE": "BIT",
    "isMetric": "yes",
    "class": "infotech",
    "names": [
      "bit"
    ],
    "printSymbols": [
      "bit"
    ],
    "properties": [
      "amount of information"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "By": {
    "isBase": false,
    "CODE": "BY",
    "isMetric": "yes",
    "class": "infotech",
    "names": [
      "byte"
    ],
    "printSymbols": [
      "B"
    ],
    "properties": [
      "amount of information"
    ],
    "values": [
      {
        "printable": "8",
        "numeric": 8
      }
    ]
  },
  "Bd": {
    "isBase": false,
    "CODE": "BD",
    "isMetric": "yes",
    "class": "infotech",
    "names": [
      "baud"
    ],
    "printSymbols": [
      "Bd"
    ],
    "properties": [
      "signal transmission rate"
    ],
    "values": [
      {
        "printable": "1",
        "numeric": 1
      }
    ]
  },
  "m": {
    "isBase": true,
    "CODE": "M",
    "dim": "L",
    "names": [
      "meter"
    ],
    "printSymbols": [
      "m"
    ],
    "properties": [
      "length"
    ]
  },
  "s": {
    "isBase": true,
    "CODE": "S",
    "dim": "T",
    "names": [
      "second"
    ],
    "printSymbols": [
      "s"
    ],
    "properties": [
      "time"
    ]
  },
  "g": {
    "isBase": true,
    "CODE": "G",
    "dim": "M",
    "names": [
      "gram"
    ],
    "printSymbols": [
      "g"
    ],
    "properties": [
      "mass"
    ]
  },
  "rad": {
    "isBase": true,
    "CODE": "RAD",
    "dim": "A",
    "names": [
      "radian"
    ],
    "printSymbols": [
      "rad"
    ],
    "properties": [
      "plane angle"
    ]
  },
  "K": {
    "isBase": true,
    "CODE": "K",
    "dim": "C",
    "names": [
      "Kelvin"
    ],
    "printSymbols": [
      "K"
    ],
    "properties": [
      "temperature"
    ]
  },
  "C": {
    "isBase": true,
    "CODE": "C",
    "dim": "Q",
    "names": [
      "Coulomb"
    ],
    "printSymbols": [
      "C"
    ],
    "properties": [
      "electric charge"
    ]
  },
  "cd": {
    "isBase": true,
    "CODE": "CD",
    "dim": "F",
    "names": [
      "candela"
    ],
    "printSymbols": [
      "cd"
    ],
    "properties": [
      "luminous intensity"
    ]
  }
}

},{}],7:[function(require,module,exports){
(function (global){
global.ucum = require('../ucum.js');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../ucum.js":9}],8:[function(require,module,exports){
module.exports = {

  multiply: function multiply(t, ms) {
    //console.log("Multiply: ", JSON.stringify(t), JSON.stringify(ms));
    if (ms.length == 0) return t;

    var ret = t;
    ms.forEach(function(mterm){

      var sign = (mterm[0] == "." ? 1 : -1);
      var b = mterm[1];

      ret.value *= Math.pow(b.value, sign);
      //console.log("b = ", JSON.stringify(b));
      //console.log("ret = ", JSON.stringify(ret));
      Object.keys(b.units).forEach(function(u){
        ret.units[u] = ret.units[u] || 0;
        ret.units[u] = ret.units[u] + sign*b.units[u];

        if(!ret.metadata && b.metadata){
          ret.metadata = {};
          ret.metadata[u] = b.metadata[u];
        }
        else if(ret.metadata && b.metadata){
          ret.metadata[u] = b.metadata[u];
        }

        if (ret.units[u] == 0){
          delete ret.units[u];
          if(ret.metadata) {
            delete ret.metadata[u];
          }
        }
      });

    });

    //console.log("Multiply ret: ", ret);
    return ret;
  },

  topower: function topower(e, exp){
    if (!exp) {exp = 1;}
    var ret = e;
    ret.value = Math.pow(ret.value, exp);
    Object.keys(e.units).forEach(function(u){
      ret.units[u] = e.units[u] * exp;
    });

    return ret;
  },

  cleanup: function cleanup(e) {
    ["10^", "10*"].forEach(function(k){
      if (e.units[k]) {
        e.value *= Math.pow(10, e.units[k]);
        delete e.units[k];
      }
    });
    return e;
  },

  ismetric: function(metrics) {
    return function(u) {
      return metrics[Object.keys(u.units)[0]] !== undefined;
    };
  }
}

},{}],9:[function(require,module,exports){
parser = require('./generated/ucum-parser.js');
equivalents = require('./generated/equivalents.json');
helpers = require('./lib/helpers.js');
unitMetadata = require('./generated/unitMetadata.json');

module.exports = {
  parse: parse,
  canonicalize: canonicalize,
  convert: convert,
  format: format,
  unitQuery: unitQuery
};

function parse(value, units){

  if (arguments.length === 1 || units === undefined){
    units = value;
    value = 1
  }

  if (units.match(/^\//)){
    units = '1'+units;
  }

  if (units === '') units = '1';

  var ret = parser.parse(units);
  ret.value *= value;
  return ret;
}

function nonBaseUnit(u){
  return equivalents[u] !== undefined;
}

function remainingNonBaseUnits(value) {
  return Object.keys(value.units).filter(nonBaseUnit)
}

function canonicalize(value, units){

  value = parse(value, units);

  var remaining = remainingNonBaseUnits(value);

  while (remaining.length) {
    if (remaining.length === 0) {
      return false;
    }

    remaining.forEach(function(u){
      var sub = parse(equivalents[u].ucum);
      sub.value *= equivalents[u].value;
      sub = helpers.topower(sub, value.units[u]);
      value = helpers.multiply(value, [['.', sub]]);
      delete value.units[u];
    });

    remaining = remainingNonBaseUnits(value);
  }

  // we should remove any prefix metadata that exists at this point
  // because it represents residual artifacts of the above process
  if(value.metadata){
    Object.keys(value.metadata).forEach(function(u){
      if(value.metadata[u]){
        if(value.metadata[u].prefix) {
          delete value.metadata[u].prefix;
        }

        // if it's not in the final array of units we should delete this metadata as well
        if(Object.keys(value.units).indexOf(u) == -1){
          delete value.metadata[u];
        }
      }
    });
  }

  return value;
}

function conformant(a, b){
  var ret = true;
  Object.keys(a.units)
  .concat(Object.keys(b.units))
  .forEach(function(k){
    if (a.units[k] !== b.units[k]) {
      ret = false;
    }
  });
  
  return ret;
}

function convert(fromValue, fromUnits, toUnits){
 fromc = canonicalize(fromValue, fromUnits);
 toc = canonicalize(toUnits);

 if (!conformant(fromc, toc)){
   throw "Non-conformant units; can't convert from " + fromUnits + " to " + toUnits ;
 }

 return fromc.value / toc.value;

}

// format returns a printable representation of the value
// the resulting units are a single-line html rendering of the resultant units
// can be invoked in the following supported ways, by example:
// 1. ucum.format('[in_i]') -> 'in'
// 2. ucum.format('[in_i]', true) -> '1 in'
// 3. ucum.format(3, '[in_i]', true) -> '3 in'
// 4. var x = ucum.parse(3, '[in_i]'); ucum.format(x) -> 'in'
// 5. var x = ucum.parse(3, '[in_i]'); ucum.format(x, true) -> '3 in'
function format(value, units, includeValue){
  var obj;

  if(typeof value === 'string'){
    includeValue = units;
    units = value;
    value = 1;
  }

  if(typeof value === 'object'){
    // treat it like a UCUM parse output
    obj = value;
    includeValue = units; // you would never provide units in this case, but you might provide includeValue
  }
  else{
    // parse it first
    obj = parse(value, units);
  }

  var units = Object.keys(obj.units);
  var metadata = obj.metadata;
  var numUnits = units.length;
  var numeratorUnits = [];
  var denominatorUnits = [];
  var printableUnits = "";
  
  units.forEach(function(unit, index){
    var exponent = obj.units[unit];
    var absExponent = Math.abs(exponent);
    var printable = metadata[unit].printSymbols ? metadata[unit].printSymbols[0] : metadata[unit].names[0];
    var prefix = metadata[unit].prefix ? metadata[unit].prefix.printSymbols[0] : "";
    pUnit = prefix + printable;
    if(absExponent !== 1){      
      pUnit += "<sup>";
      pUnit += Math.abs(exponent);
      pUnit += "</sup>";
    }
    
    if(exponent > 0){
      numeratorUnits.push(pUnit);
    }
    else{
      denominatorUnits.push(pUnit);
    }
  });


  if(numeratorUnits.length == 0){
    printableUnits = "1";
  }
  else if(numeratorUnits.length > 0){
    printableUnits = numeratorUnits.join("*");
  }
  
  if(denominatorUnits.length > 0){
    printableUnits += "/";
  } 
  
  printableUnits += denominatorUnits.join("/");

  if(includeValue){
    printableUnits = obj.value + " " + printableUnits;
  }

  return printableUnits;
}

// searches the unit metadata for all unit metadata
// criteria is an object like
//   { properties: 'area', isMetric: 'yes' }
// where the key/value pairs form a logical intersection, i.e. all criteria must be met
// resultFields is an array to pre-reduce the result set fields
function unitQuery(criteria, resultFields){
  return Object.keys(unitMetadata).filter((unit) => {
    var keys = Object.keys(criteria);
    for(var ii = 0; ii < keys.length; ii++){
      var key = keys[ii];
      var val = unitMetadata[unit][key];
      var value = criteria[key];
      if(val && (typeof val === 'object')){
        // it's a list of values, it's a match if the target value occurs in the list
        if(val.indexOf(value) === -1){
          return false;
        }
      }
      else{
        // it's a non-object, make a direct comparison
        if(unitMetadata[unit][key] !== value){
          return false;
        }
      }
    }
    return true;
  }).map((key) => {
    var obj = {};
    if(resultFields){
      if(resultFields.length) {
        obj[key] = {};
        resultFields.forEach((field) => {
          if (unitMetadata[key][field] !== undefined) {
            obj[key][field] = JSON.parse(JSON.stringify(unitMetadata[key][field]));
          }
        });
      }
      else{
        // just return the keys if an empty array gets passed for resultSet
        obj = key;
      }
    }
    else{
      obj[key] = JSON.parse(JSON.stringify(unitMetadata[key]));
    }
    return obj;
  });
}
},{"./generated/equivalents.json":1,"./generated/ucum-parser.js":5,"./generated/unitMetadata.json":6,"./lib/helpers.js":8}]},{},[7]);
