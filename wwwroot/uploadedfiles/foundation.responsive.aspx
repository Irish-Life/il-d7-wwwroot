<%@ Page Language="VB" AutoEventWireup="false" CodeFile="/uploadedFiles/foundation.responsive.aspx.vb" Inherits="responsive" Debug="true" %>
<%@ Register TagPrefix="cms" Namespace="Ektron.Cms.Controls" Assembly="Ektron.Cms.Controls" %> 
<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	
	<cms:MetaData ID="contentMetadata" runat="server" SuppressWrapperTags="true" DefaultContentID="62" DynamicParameter="id" GenerateDublinCore="false" />
	<asp:Literal ID="iqHeaderblock" runat="server"></asp:Literal>
	<cms:ContentBlock ID="ilfsCSS" runat="server" DefaultContentID="19600" SuppressWrapperTags="true" />
	<cms:ContentBlock ID="ilfsFBOG" runat="server" DefaultContentID="18790" SuppressWrapperTags="true" />
	<asp:Literal runat="server" ID="mobileMeta" />
	<!--[if lt IE 9]>
	<link rel="stylesheet" media="screen, print" type="text/css" href="https://www.irishlife.ie/secureWeb/uploadedImages/ie8-grid-foundation-4.css"/>
	<![endif]-->

</head>
<body>
	<!-- This is the main header of the page, with menus etc -->
	<asp:Literal ID="iqMenublock" runat="server"></asp:Literal>
		
	<!-- This is the main content of the page -->
	<cms:ContentBlock ID="MainContentBlock" runat="server" DefaultContentID="36" SuppressWrapperTags="true" DynamicParameter="id" />

	<asp:Literal ID="iqFooterblock" runat="server"></asp:Literal>
	
	<asp:Literal ID="ilfsGeneralJS" runat="server"></asp:Literal>
	

		<cms:ContentBlock ID="ilfsJavascript" runat="server" DefaultContentID="17040" SuppressWrapperTags="true" />

</body>
</html>