'*********************************************************************************
'
'  Copyright:	2007 - MediaOne, Grand Canal Quay, Dublin 2
'
'  Author:		Glenda Conaty
'
'  Date Created: 14 March 2007
'
'  Description:	Template page for the products section.
'               This is the most complex page as this one page is used to display
'               content from many different folders, where the bcrumb changes,
'               menu needs to be generated, related RHS content needs to be set etc
'
'*********************************************************************************
Imports System
Imports System.IO
Imports System.Web.HttpContext
Imports System.Text
Imports System.Xml
Imports System.Web.UI
Imports Ektron.Cms
Imports Ektron.Cms.Common
Imports Ektron.Cms.Common.EkFunctions

Partial Class retailcontent
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim pageId As Integer
        Dim folderNameStr As String = ""
        Dim pageNameStr As String = ""
        Dim rhs_relatedValue As String = ""
        Dim menuId As Integer

		Dim api as New Ektron.Cms.API.Content.Content
		
		headerblock.Text = api.GetContent(5278).Html
		menublock.Text = api.GetContent(5280).Html
		menublockAdvice.Text = api.GetContent(5282).Html
		menublockProducts.Text = api.GetContent(5284).Html
		menublockCustomerService.Text = api.GetContent(5286).Html
		footerblock.Text = api.GetContent(5288).Html
		contentJavascript.Text = api.GetContent(5634).Html
        '# Check for id being passed in on the query string
        If Not IsNumeric(Request.QueryString("id")) Then
            '# default Id
            pageId = 66
        Else
            pageId = Request.QueryString("id")
        End If
        
        '# Display Folder Name & Breadcrumb end
        Dim pgCls As New Page
		
		
        '# Set folder name
        folderNameStr = Server.HtmlDecode(pgCls.GetFolderName(pageId))
        'folderName.Text = folderNameStr

        '# Start Bcrumb
        breadcrumb.Text = pgCls.GetContentBreadCrumb(pageId)

        '# Set page Name & Breadcrumb end
        pageNameStr = Server.HtmlDecode(pgCls.GetPageName(pageId))
        If Len(pageNameStr) > 0 Then
            breadcrumbEnd.Text = LCase(pageNameStr)
        End If
		
		'# Get Menu Id and Display menu
		menuId = pgCls.GetMenuId(pageId)
		Dim menuCls As New DisplayMenu
		
		'menuText.Text = menuCls.GenMenu(menuId, Request.RawUrl)
		menuCls = Nothing
		
		
        pgCls = Nothing

    End Sub

End Class