import {
  defaultFonts,
  defaultEasings as easings,
  defaultPalette as palette,
  defaultSwatch as swatch
} from './constantValues'

const defaultTheme = ({ colors, fontFamily }) => {
  const fonts = {
    ...defaultFonts,
    primaryFontFamily: `${fontFamily}, sans-serif`
  }

  return {
    fonts,

    colors: {
      primary: colors.primary1,
      placeholder: swatch.indigo[500],
      separator: palette.border.primaryDark,
      label: swatch.grey.B100,
      border: palette.border.primary,
      primaryBackground: swatch.grey.A200,
      secondaryBackground: swatch.grey.A100,
      darkBackground: swatch.indigo[500],
      lightBackground: swatch.white,
      alternateRow: swatch.grey.B600,
      success: colors.success,
      error: colors.error,

      accessibility: {
        imageBackgroundDark: swatch.grey[900],
        imageBackgroundLight: swatch.white
      },

      alert: {
        success: colors.success,
        default: swatch.grey.A600,
        danger: swatch.red[500],
        warning: swatch.yellow[100],
        icons: {
          light: swatch.white
        }
      },

      alertBanner: {
        border: swatch.grey[100],
        background: {
          dark: '#333333',
          light: '#ffffff'
        },
        icon: {
          danger: swatch.red[700],
          success: colors.success,
          information: colors.primary1,
          attention: colors.primary1
        }
      },

      button: {
        defaultBackground: 'transparent',
        defaultBorder: 'transparent',

        contained_background: colors.primary1,
        contained_background_disabled: swatch.grey[700],
        contained_background_hover: colors.primary2,
        contained_color: colors.buttonText,
        contained_color_disabled: colors.buttonText,
        contained_color_hover: colors.buttonText,

        outlined_border: colors.primary1,
        outlined_border_disabled: swatch.grey[100],
        outlined_border_hover: colors.primary2,
        outlined_color: colors.primary1,
        outlined_color_disabled: swatch.grey[100],
        outlined_color_hover: colors.primary2,

        text_color: colors.primary1,
        text_color_disabled: swatch.grey[100],
        text_color_hover: colors.primary2,

        icon_color: colors.primary1,
        icon_color_disabled: swatch.grey[100],
        icon_color_hover: colors.primary2
      },

      docsInlineCode: {
        background: palette.code.background,
        code: colors.primary1
      },

      cardDetails: {
        backgroundColor: palette.background.light,
        borderColor: palette.border.primaryDark,
        icon: swatch.grey.A400
      },

      dropdown: colors.primary1,

      dropdownItem: {
        background: swatch.grey.A100,
        color_light: swatch.grey[700],
        color_primary: colors.primary1,
        color_dark: swatch.white,
        hoverColor_light: colors.primary1,
        hoverColor_primary: colors.primary1,
        hoverColor_dark: swatch.white
      },

      icon: {
        dark: swatch.black,
        light: swatch.white,
        muted: swatch.grey[700],
        primary: palette.icon.primary,
        secondary: palette.icon.secondary
      },

      headline: {
        dark: colors.textDark,
        medium: swatch.grey[800],
        mediumDark: '#7383A1',
        light: colors.textLight,
        semi_light: swatch.grey.B100,
        primary: colors.primary1,
        primaryDark: colors.primary1
      },

      sectionHeader: {
        primary: swatch.grey.B100,
        medium: palette.text.light
      },

      sidebar: {
        background: palette.background.dark,
        menuItem: swatch.grey[500],
        menuItem_active: palette.text.light,
        activeDot: colors.primary1
      },

      adminSidebarMenuItem: {
        background: swatch.grey[700],
        background_before: swatch.indigo[500],
        color: swatch.indigo[800],
        color_active: swatch.white
      },

      adminHeader: {
        background: palette.background.dark
      },

      adminHeaderButton: {
        background: swatch.grey[700],
        background_hamburger: swatch.white,
        borderStyle: 'solid',
        borderColor: swatch.white
      },

      adminSidebar: {
        background: swatch.grey[500]
      },

      navbar: {
        background: palette.background.dark
      },

      toolTip: {
        background: palette.background.dark,
        divider: '#323F53',
        text: '#F0F3F8'
      },

      marketingTooltip: {
        background: colors.primary1,
        textColor: palette.background.light,
        variant: 'primary'
      },

      sidebar_docs: {
        icon: swatch.indigo[500],
        link: swatch.grey[700]
      },

      text: {
        color_dark: colors.textDark,
        color_light: colors.textLight,
        color_negative: colors.error,
        color_muted: swatch.grey.B100,
        color_primary: colors.primary1,
        color_success: colors.success,
        color_inherit: 'inherit'
      },

      detailsCard: {
        background: palette.background.light,
        positiveHeader: swatch.green.A100,
        suspendedHeader: swatch.red[700]
      },

      iconCard: {
        dark: swatch.indigo[500]
      },

      iconButton: swatch.grey.A400,
      iconButton_hover: swatch.grey.A600,

      standardButton: {
        label: swatch.indigo[700],
        background: swatch.grey.A300
      },

      input: {
        background_light: palette.background.light,
        background_normal: swatch.blue[100],
        borderColor: palette.border.primaryDark,
        borderColor_hover: swatch.grey[600],
        borderColor_error: colors.error,
        borderColor_focus: colors.primary1,
        borderColor_success: colors.success,
        quantityInputBorder: '#d5dce6',
        color: swatch.indigo[500],
        icon: swatch.grey.A600,
        error: colors.error,
        success: colors.success,
        light: swatch.indigo[500]
      },

      checkBoxInput: {
        borderColor: swatch.grey[600],
        borderColor_hover: swatch.grey[800]
      },

      selectInput: {
        borderColor: swatch.grey.A300,
        optionText: swatch.indigo[500],
        optionText_hover: palette.text.light,
        optionText_selected: colors.primary1,
        optionBackground: palette.background.input,
        optionBackground_hover: colors.primary1,
        dropdownIndicator: swatch.grey.A600
      },

      header: {
        background: palette.background.light,
        background_dark: swatch.indigo[500],
        border: palette.border.primary
      },

      box: {
        background: palette.background.light
      },

      login: {
        footerBackground: swatch.blue[100]
      },

      stat: {
        danger: colors.error,
        outOfCredit: swatch.orange,
        primary: colors.primary1,
        secondary: colors.primary1,
        success: colors.success,
        text: colors.textLight,
        warning: swatch.grey.A500
      },

      billingStat: {
        icon: palette.text.light,
        icon_background: swatch.grey.A500
      },

      table: {
        text: swatch.indigo[500],
        headerText: swatch.grey.B100,
        headerBackground: swatch.grey[200],
        border: palette.border.primary,
        hoverBackground: 'rgba(241, 244, 248, 0.5)',
        selectedBackground: swatch.grey[700],
        selectedText: palette.text.light
      },

      textLink: {
        color: swatch.indigo[500],
        color_primary: colors.primary1,
        color_primaryDark: colors.primary1,
        color_muted: swatch.grey[100],
        outlineColor: colors.textLight
      },

      tabBar: {
        dark: palette.background.dark,
        light: swatch.grey.A200
      },

      tab: {
        border_highlighted: colors.primary1,
        border_bright: palette.text.light,
        border_normal: colors.primary1,
        bright_active: palette.text.light,
        bright: palette.text.light,
        highlighted_active: swatch.indigo[500],
        highlighted: colors.primary1,
        muted: swatch.grey[700],
        normal_active: colors.textDark,
        normal: colors.textDark
      },

      megaMenu: {
        primaryNavBar: {
          dark_color: palette.text.light,
          border_dark: palette.text.light,
          dark_active: palette.text.light,
          light_color: colors.textDark,
          border_light: colors.primary1,
          light_active: colors.textDark
        }
      },

      toggle: {
        sliderBackgroundColor: swatch.grey[700],
        sliderActiveBackgroundColor: swatch.green[100],
        toggleTextColor: '#fff'
      },

      dialog: {
        background: palette.background.light,
        outlineColor: swatch.white,
        overlayBackground: palette.overlay
      },

      divider: {
        normal: palette.border.primary,
        normalFaded: swatch.grey.B500,
        normalDark: palette.border.primaryDark,
        light: swatch.blue[200]
      },

      tabRadioInput: {
        primaryBorder: swatch.grey.A300,
        selectedBorder: colors.primary1
      },

      graph: {
        axis: palette.border.primary,
        label: swatch.indigo[500]
      },

      lineGraph: {
        minutesFill: swatch.purple,
        messagesFill: colors.primary1
      },

      barGraph: {
        minutesGradientStart: swatch.purple,
        minutesGradientEnd: swatch.purple,
        messagesFill: colors.primary1
      },

      lineChart: {
        stroke: colors.primary1
      },

      pieChart: {
        colorScale: [colors.primary1, swatch.purple]
      },

      footer: {
        background: swatch.grey[900]
      },

      billingSummary: {
        backgroundColor: '#fafbfc',
        borderColor: swatch.grey[100]
      },

      pre: {
        background: swatch.grey[900]
      },

      profilePicture: {
        backgroundColor: swatch.white
      },

      stepIndicator: {
        titlePrimary: swatch.grey.A800,

        greyscale: {
          titleActive: palette.text.light,
          labelPrimaryForeground: palette.text.light,
          labelPrimaryBackground: swatch.grey[900],
          labelActive: colors.primaryLight,
          labelActiveForeground: 'none',
          labelPrimaryDone: 'none',
          labelPrimaryDoneForeground: swatch.grey.B100
        },

        colored: {
          titleActive: colors.textLight,
          labelPrimaryForeground: swatch.grey.B100,
          labelPrimaryBackground: colors.textLight,
          labelActive: swatch.grey.B100,
          labelActiveForeground: colors.textLight,
          labelPrimaryDone: colors.success,
          labelPrimaryDoneForeground: colors.textLight
        }
      },

      breadcrumb: {
        active: swatch.indigo[500]
      },
      BoxedCheckboxInput: {
        default: {
          backgroundColor: 'transparent',
          borderColor: '#ced0da',
          disabledBackgroundColor: '#e6eaee',
          disabledBorderColor: '#dfe3e9',
          hoverBackgroundColor: 'linear-gradient(0deg, #dfe3e9 0%, #f2f4f7 100%)',
          selectedBackgoundColor: '#7f8fa4',
          selectedTextColor: '#fff',
          textColor: '#354052'
        }
      },

      borderedIcon: {
        dark: swatch.indigo[500],
        primary: colors.primary1,
        secondary: swatch.grey[700]
      },

      borderedIconCheckboxInput: {
        activeColor: swatch.indigo[500]
      },

      textDivider: {
        line: swatch.grey[400],
        background_grey: swatch.grey.A200,
        background_white: palette.background.light
      },

      timelineGroup: {
        borderColor: swatch.grey.B500
      },

      timelineItem: {
        backgroundColor: swatch.grey.A400
      },

      filledButton: {
        borderColor_light: swatch.grey.A300,
        borderColor_outline: swatch.white,
        color_transparent: colors.primary1,
        color_normal: colors.buttonText,
        color_positive: colors.buttonText,
        color_light: swatch.indigo[700],
        color_disabled: swatch.grey[800],
        color_outline: swatch.white,
        disabled_background: swatch.grey[100],
        disabled_border: swatch.grey[400]
      },

      confirmationIcon: {
        primary: colors.success,
        error: colors.error,
        information: colors.primary1
      },

      serviceCard: {
        border: palette.border.primaryDark
      },

      tag: {
        text: palette.text.light,
        positive: colors.success,
        neutral: swatch.grey.A500,
        dark: swatch.indigo[500],
        optimistic: '#f7981c',
        muted: swatch.grey[700],
        negative: colors.error
      },

      subTabBar: {
        backgroundColor: swatch.grey[200]
      },

      subTab: {
        backgroundColor: swatch.grey[700],
        text: swatch.grey[700],
        text_active: colors.textLight,
        text_dark: colors.textDark
      },

      sidePanel: {
        headerBackground: swatch.grey.B100
      },

      sidePanelStepIndicator: {
        background: '#ffffff',
        color: swatch.grey[700],
        dividerColor: swatch.grey.A400,
        listItem_done: swatch.green[100]
      },

      iconTab: {
        base: '#0568ad',
        border: '#c4d1dd',
        active: '#303d4c'
      },

      card: {
        border: swatch.grey.B500
      },

      progressBar: {
        backgroundColor: '#e2e7ee'
      },

      loader: {
        defaultBackground: colors.primary1
      },

      bullet: {
        default: '#40557d',
        neutral: swatch.grey.A500,
        positive: colors.success,
        primary: '#1aa6d6',
        negative: colors.error,
        warning: swatch.orange,
        inProgress: swatch.yellow[400]
      },

      apiPricingView: {
        alternateBackground: 'rgba(241, 244, 248, 0.5)'
      },

      restApiModel: {
        dataType: {
          string: swatch.teal[500],
          boolean: swatch.yellow[800],
          array: swatch.green[700],
          object: swatch.purple,
          integer: swatch.red[900]
        }
      },

      reviewBanner: {
        background: swatch.grey.A200
      },

      simpleCardDetails: {
        icon: swatch.grey.A900
      },

      subNav: {
        primary: colors.primary1,
        active: swatch.grey[700],
        activeBorder: swatch.grey[700]
      },

      homeIcon: {
        color: colors.primary1
      },

      pricing: {
        alternateRow: swatch.grey.B600
      },

      supportCard: {
        darkBorderColor: swatch.indigo[500],
        darkColor: swatch.indigo[500]
      },

      pager: {
        background: '#ffffff'
      },

      verticalStepper: {
        stepIndex: {
          borderColor: swatch.grey[700]
        },
        stepIndexActive: {
          background: swatch.grey[700]
        },
        connector: {
          borderLeft: palette.border.primary
        }
      },

      segment: {
        defaultBackground: '#fff',
        greyBackground: swatch.grey.A200
      },

      customScrollbar: {
        default: '#999 transparent',
        thumbBackground: '#999',
        thumbHover: '#777',
        thumbActive: '#555',
        trackBackground: 'none',
        trackHover: '#ccc',
        trackActive: '#ccc'
      },

      cloudVoiceColors: {
        green: '#66b92e',
        muted: '#7f8fa4',
        amber: '#f5a623'
      }
    },

    gradients: {
      primary: `linear-gradient(0deg, ${colors.primary1} 0%, ${colors.primaryLight} 100%)`,

      filledButton: {
        normal: colors.primary1,
        normal_hover: swatch.purple,
        normal_active: colors.primary1,
        //  temporary end
        background_normal: `linear-gradient(0deg, ${colors.primary1} 0%, ${colors.primaryLight} 100%)`,
        background_normalHover: `linear-gradient(0deg, ${colors.primary1} 0%, ${colors.primaryLight} 100%)`,
        background_normalActive: `linear-gradient(0deg, ${colors.primary1} 0%, ${colors.primaryLight} 100%)`,
        background_outline: 'transparent',
        background_outlineHover: 'transparent',
        background_outlineActive: 'transparent',
        background_positive: colors.primary1,
        background_positiveHover: swatch.purple,
        background_positiveActive: colors.primary1,
        background_transparent: 'transparent',
        background_transparentHover: 'transparent',
        background_transparentActive: 'transparent',
        background_light: `linear-gradient(0deg, ${swatch.grey[300]} 0%, ${palette.background.light} 100%)`,
        background_lightHover: `linear-gradient(0deg, ${swatch.grey[300]} 0%, ${palette.background.light} 100%)`,
        background_lightActive: `linear-gradient(0deg, ${swatch.grey[300]} 0%, ${palette.background.light} 100%)`,
        background_muted: '#e9edf1'
      },

      standardButton: {
        normal: `linear-gradient(0deg, ${swatch.grey[300]} 0%, ${palette.background.light} 100%)`,
        normal_hover: `linear-gradient(0deg, ${swatch.grey[400]} 0%, ${swatch.grey[300]} 100%)`,
        normal_active: `linear-gradient(0deg, ${swatch.grey[300]} 0%, ${palette.background.light} 100%)`
      },

      selectInput: {
        background_normal: `linear-gradient(0deg, ${palette.background.input} 0%, ${palette.background.light} 100%)`
      },

      homePage: {
        background: `linear-gradient(0deg, ${swatch.grey.A500} 0%, rgba(193, 200, 213, 0.8) 100%)`
      },

      checkbox: {
        background: 'linear-gradient(0deg, #f2f4f8 0%, #feffff 100%)'
      },

      progressBar: {
        positive: `linear-gradient(0deg, ${colors.success} 0%, ${colors.success} 100%)`,
        primary: 'linear-gradient(0deg, #1991eb 0%, #0568AE 100%)',
        optimistic: 'linear-gradient(0deg, #fdc018 0%, #f8cf5d 100%)'
      },

      bannerBlock: {
        background: 'linear-gradient(rgb(11,104,174), rgb(13,122,194))'
      }
    },

    shadows: {
      header: `0px 1px 0px 0px ${palette.border.primary}`,
      checkbox: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      input: 'inset 0 2px 1px 1px rgba(0, 0, 0, 0.04)',
      supportCard: '4px 4px 20px 1px rgba(224, 224, 224, 1)'
    },

    transitions: {
      simple: 'all 0.3s ease',
      fluid: `all 0.3s ${easings.easeOutQuad}`
    },

    typography: {
      codeText: {
        fontFamily: fonts.monaco,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.3
      },
      docsCodeText: {
        fontFamily: fonts.monaco,
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 1.4
      },
      docsTableTd: {
        fontFamily: fonts.monaco,
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 1.3
      },
      markdownTableTd: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.6
      },
      headerLogoText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 18,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      headline: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 48,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      confirmationMsg: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 36,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      xlargeText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 24,
        fontWeight: 'normal',
        lineHeight: 1.6
      },
      largeText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 20,
        fontWeight: 'normal',
        lineHeight: 1.6
      },
      mediumLargeText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 18,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      mediumText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      xsmallText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 13,
        fontWeight: 'normal',
        lineHeight: 1.6
      },
      smallText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.6
      },
      tinyText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      extraSmallText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 1.2
      },
      primaryText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2
      },
      lightText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 1.2
      },
      boldText: {
        fontFamily: fonts.primaryFontFamily,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.2
      }
    },

    units: {
      gridContainer: {
        maxWidth: 1170
      },

      columns: 12,
      gutter: 30,
      xsGutter: 15,
      columnGutter: 10,
      rowGutter: 20,
      gridStartingIndex: 0,
      offsetStartingIndex: 1,
      defaultOpacity: 0.5,
      borderRadius: 4,
      boldFontWeight: 500,
      bolderFontWeight: 600,

      blocks: {
        defaultSpacing: 25,
        firstChildTopSpacing: 50,
        lastChildBottomSpacing: 50
      },

      card: {
        bodyHeight: 65,
        borderRadius: 4,
        height: 280,
        padding: [55, 45, 0]
      },

      cardDetails: {
        borderRadius: 4
      },

      box: {
        borderRadius: 4,
        padding: 30,
        width: 350
      },

      button: {
        borderRadius: 18,
        borderWidth_outlined: 1,
        height_large: 39,
        height_regular: 36,
        height_small: 30,
        iconOuterMargin: 3,
        innerTextMarginX_large: 15,
        innerTextMarginX_regular: 12,
        innerTextMarginX_small: 10,
        innerTextMarginX_compact: 0,
        compactPadding: 4,
        padding: 10
      },

      content: {
        horizontalPadding: 30,
        verticalPadding: 20
      },

      container: {
        verticalMargin: 30,
        width: 970
      },

      cardBox: {
        padding: 30,
        xsPadding: 15
      },

      adminHeaderButton: {
        borderWidth: 3,
        height: 3,
        margin: [0, 10],
        padding: [14, 11],
        top: -11,
        transformOrigin: 13,
        width: 25
      },

      header: {
        borderWidth: 1.2,
        height: 80,
        width: 80,
        height_nav: 50,
        searchInputWidth: 255,
        selectInputWidth: 170
      },

      logoAspectRatio: 57 / 139,

      iptf: {
        heroContainer: {
          height: 660
        },
        heroPara: {
          margin: [20, 0, 45]
        },
        followUp: {
          padding: [60, 0, 50]
        },
        section2Image: {
          smMinHeight: 236,
          smMaxHeight: 321
        },
        section4Image: {
          smMinHeight: 251,
          smMaxHeight: 415
        }
      },

      itemGroup: {
        fullHeight: '100%'
      },

      msTeamsFooter: {
        footerText: {
          height: '35px'
        },
        dialogFooterSection: {
          bottom: 0,
          left: 0,
          width: '100%',
          height: 80,
          padding: [10, 30]
        }
      },

      text: {
        lineHeight_compact: 1.2,
        lineHeight_cozy: 1.6,
        lineHeight_normal: 1.8
      },

      filledButton: {
        borderRadius: 18,
        borderWidth_light: 1,
        borderWidth_outline: 1,
        height_regular: 36,
        height_small: 24,
        padding_regular: 20,
        padding_small: 11,
        width_regular: 130,
        width_small: 80,

        transparent: {
          padding_regular: 0,
          padding_small: 0
        }
      },

      input: {
        borderRadius: 4,
        borderWidth: 1,
        horizontalPadding: 12,
        margin: 10,
        verticalPadding: 8,
        verticalPadding_small: 3,
        dataTablePaddingLeft: 40,
        dataTablePaddingVertical: 16,
        dataTablePaddingVerticalSmall: 19
      },

      onboardingLayout: {
        layoutHeight: '100vh',
        asidePadding: 50,
        asidePaddingVertical_xs: 40,
        asidePaddingHorizontal_xs: 10,
        asideImgHeight_xs: 45,
        asideFontSize_xs: 30,
        asideWidth: '35%',
        mainHorizontalPadding: 130,
        mainVerticalPadding: 50
      },

      selectInput: {
        optionHeight: 34
      },

      sidebar: {
        buttonWidth: 150,
        menuItemPaddingTop: 20,
        padding: 25,
        width: 250
      },

      sidePanelStepIndicator: {
        borderRadius: 100,
        height: 28,
        listItemDividerWidth: 22,
        listItemPaddingRight: 38,
        listPadding: 0,
        right: -30,
        top: 12,
        width: 28
      },

      adminSidebarMenuItem: {
        padding: [11, 25],
        width: 5
      },

      navbar: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 30,
        minHeight: 22
      },

      adminHeader: {
        padding: [8, 25],
        xsPadding: [15, 30, 15, 25],
        top: 0,
        width: '100%',
        height: 70
      },

      adminHeaderTag: {
        marginRight: 15
      },

      adminSidebar: {
        height: '100vh',
        left: 0,
        paddingTop: 94,
        top: 0,
        width: 250,
        xsWidth: '100%'
      },

      timelineGroup: {
        bottom: 0,
        minHeight: '100%',
        left: 5,
        top: 0
      },

      timelineItem: {
        borderRadius: 100,
        height: 35,
        itemDateMarginRight: 10,
        left: 2,
        marginBottom: 25,
        markerSize: 8,
        paddingLeft: 35,
        top: 3
      },

      breadcrumb: {
        marginRight: 10,
        iconMargin: [0, 10]
      },

      tabBar: {
        height: 60,
        horizontalPadding: 30
      },

      sidePanel: {
        borderRadius: 0,
        overlayHeight: '100vh',
        width: 380
      },

      tab: {
        marginRight: 35,
        marginRightSm: 20,
        minWidth: 170,
        verticalPadding: 19,
        verticalPaddingSm: 10,
        horizontalPaddingSm: 5
      },

      dialog: {
        width: 770,
        verticalPadding: 20,
        horizontalPadding: 30,
        minBodyHeight: 375,
        maxBodyHeight: 500,
        maxBodyHeightLarge: 600
      },

      footer: {
        height: 420
      },

      main: {
        paddingBottom: 25,
        paddingTop: 36
      },

      quantityInput: {
        height: 35,
        width: 84,
        controlWidth: 20
      },

      detailsCard: {
        padding: 15,
        height: 50,
        horizontalPadding: 30,
        verticalPadding: 10
      },

      simpleSideMenu: {
        bottomOffset: 50
      },

      label: {
        marginBottom: 5
      },

      graph: {
        strokeWidth: 3
      },

      divider: {
        normalOpacity: 1,
        lightOpacity: 0.1
      },

      separator: {
        width: 1,
        height: 30
      },

      billingSummary: {
        padding: 15
      },

      affix: {
        width: 270,
        maxHeight: 1024
      },

      stat: {
        padding: 25,
        paddingLeft: 30
      },

      tag: {
        height: 19,
        maxWidth: 70,
        largeMaxWidth: 120
      },

      subTabBar: {
        height: 64
      },

      table: {
        padding: 10,
        cellPadding: 14,
        headerVerticalPadding: 10,
        headerHorizontalPadding: 30,
        defaultContentHeight: 250,
        selectedRowFontWeight: 500,

        wrapper: {
          padding: [20, 30],
          dataText: {
            fontSize: 26,
            lineHeight: 0.7
          },
          smallScreen: {
            padding: [20, 15],
            fontSize: 24,
            lineHeight: 1.2
          },
          secondaryColumnsSmall: {
            fontSize: 14,
            lineHeight: 1,
            paddingBottom: 20
          }
        }
      },

      trunkUsersTable: {
        paddingBottom: 10
      },

      toolTip: {
        height: 100,
        width: 135
      },

      toggle: {
        height: 25,
        marginLeft: 10,
        sliderBorderRadius: 100,
        sliderButtonHeight: 20,
        sliderButtonWidth: 20,
        sliderPosition: 0,
        toggleTextFontSize: 16,
        toggleTextPosition: 8,
        width: 65
      },

      navTab: {
        fontWeight_active: 600
      },

      homeIcon: {
        marginRight: 4
      },

      headline: {
        bold: 500,
        bolder: 600,
        normal: 'normal'
      },

      orderConfirmationDialog: {
        innerWidth: 350
      },

      profilePicture: {
        size: 40,
        xsSize: 40
      },

      authHeaderWrapper: {
        padding: 50
      },

      formAreaWrapper: {
        paddingTop: 150,
        width_sm: 350
      },

      supportCard: {
        height: 150,
        padding: 20
      },

      clickToChat: {
        wrapperPositionRight: 30,
        wrapperPositionBottom: 110,
        imageSize: 70
      },

      markdownTable: {
        nameColumnWidth: 180,
        typeColumnMinWidth: 140,
        typeColumnMaxWidth: 320
      },

      pager: {
        height: 35,
        width: 35,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4
      },

      paginator: {
        padding: 0
      },
      verticalStepper: {
        stepper: {
          padding: 30
        },
        stepIndex: {
          borderRadius: 100,
          height: 14,
          width: 14,
          marginRight: 12
        },
        connector: {
          height: 20,
          marginLeft: 6
        },
        stepContent: {
          marginBottom: 12
        },
        stepContentContainer: {
          marginLeft: 6,
          padding: 20
        }
      },

      customScrollbar: {
        default: 'thin',
        webkitScrollbarWidth: '5px',
        webkitScrollbarHeight: '6px',
        thumbBorderRadius: '2px',
        trackBorderRadius: '2px'
      }
    },

    zIndexes: {
      dialogFormFooter: 2,
      subTabBar: 5,
      megaMenu: 8,
      header: 10,
      fixedDatatableHeader: 11,
      sidebar: 15,
      userMenu: 20,
      adminSidebar: 25,
      adminHeader: 30,
      responsiveModal: 80,
      dialog: 100,
      dropdown: 250,
      alert: 500,
      sidePanelRoot: 100,
      chatIcon: 50
    }
  }
}

export default defaultTheme
