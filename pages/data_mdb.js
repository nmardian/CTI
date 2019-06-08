/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Footer from './footer';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 0,
  },
  table: {
    minWidth: 200,
	maxWidth: 1000,
  },
  paper: {
	  display: 'inline-block',
  },
});

const theme = createMuiTheme();

class Data_MDB extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
	
	let id = 0;
	function createData(sha, type, proc, file, domain) {
	  id += 1;
	  return { id, sha, type, proc, file, domain };
	}
	
	const rows = [
		createData('713db4d216c2833fb50862fc59d54c4cb4800e9117b54c992f3451f9f8971524', 'DLL', 'rundll32.exe, mssecsvc.exe, mssecsvc.exe', 'mssecsvc.exe, tasksche.exe, nuh5jzwn.txt, p0elt5yg.txt', 'www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com'),
		createData('def09368d22c7b3f6a046ef206a57987095b2f4ddae1d26c6ef2594d6be09bfc', 'EXE', 'pplication2.exe, reg.exe, reg.exe, reg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, powercfg.exe, reg.exe, takeown.exe, takeown.exe, takeown.exe, takeown.exe, takeown.exe, takeown.exe, takeown.exe, icacls.exe, icacls.exe, icacls.exe, icacls.exe, icacls.exe, icacls.exe, icacls.exe, attrib.exe, attrib.exe, attrib.exe, attrib.exe, attrib.exe, attrib.exe, attrib.exe, attrib.exe, cmd.exe', 'syspwrcontr.sys, wmiadap.sys, hosts', ''),
		createData('9888c4d7c22d3981fadb594deced73e141d126df9f4a1f66b8a3b1e1acf026bf', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links, a9r6kvfo8_zr266c_sk.tmp, a9rrhzf60_zr266b_sk.tmp', ''),
		createData('f69223cf5a39fc46b58e6b8433cec4c30f476ddbf53726bc3fdf5ce16a8f62ba', 'EXE', 'executable.2796.exe', '', ''),
		createData('b28eb875288bbd497e2114b818cec6792a71a4aa631e910ab887650f5e54dc80', 'EXE', 'auditcse.com.exe, auditcse.com.exe, notepad.exe, cmd.exe, wscript.exe, cmd.exe, wscript.exe', 'auditcse.com.exe, cpoolhost.exe, cpoolhost, cpoolhost, auditcse.com, systemresetplatform.url, systemresetplatform.vbs, 5f4038dd8b, cfgi, cfg, r.vbs, r.vbs, dyutydaeqs.url, counters2.dat', 'soloformin.linkpc.net, pool.hashvault.pro'),
		createData('17e58a66e79add391f9f41c945a26d8f4c0bfd9e4ab4d6d8e0555e6d7f94949d', 'EXE', 'yvl.exe', '', ''),
		createData('2ad7b28644615a44177b1ecb2cd9597f3b12e7f2bbab5bf91f636bb9511f29f1', 'EXE', '5c482fd4bc70c63df225d8029120868d.exe, ~bf93a1.tmp, cmd.exe', '_uninsep.bat, golfset.ini, ~bf93a1.tmp', ''),
		createData('3de3a5038efa886e26546f1083685d2cb7409d0bd3049784443cd378b2026777', 'EXE', 'quotation.exe', '', ''),
		createData('82b6f730e7dcba96347074017df8934318401eb684c3cfe5f99ea5a225ec5a06', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links, acecache11.lst, a9r7lepql_1thqvzk_2io.tmp, a9rhfx86n_1thqvzj_2io.tmp, a9rjbqdev_1thqvzh_2io.tmp, z@r7885.tmp, z@r78e5.tmp, 00002.spl', ''),
		createData('2f1d417199f727f0151f6d1d402690e057fb57950292ce711a5f99f368ec87a2', 'Compressed file', '', '', ''),
		createData('5bd134a71db1d1afe9ae112855f198a673929c53712522d610eb4c509fe26142', 'EXE', 'setupvalhallavintageverbv1.7.1.exe, setupvalhallavintageverbv1.7.1.tmp', 'isskinu.dll, r2rinno.dll, uninstall.lnk, is-1cjtj.tmp, is-3t6o2.tmp, is-4etc4.tmp, is-53g6o.tmp, is-8vq6j.tmp, is-b3tae.tmp, is-d6ovu.tmp, is-ec22r.tmp, is-f8h8k.tmp, is-kf2cj.tmp, is-kkn9b.tmp, is-m51bp.tmp, is-nro1e.tmp, is-o77gm.tmp, is-oa9k2.tmp, is-ogevq.tmp, is-oq119.tmp, is-p4m9e.tmp, is-penfi.tmp', ''),
		createData('65ff03331a85f44216595ada42a3c1f28363566a5509f410bd0f0bec9da62727', 'EXE', 'ae9a197626d81e1f9d510fb944c7a6a6.exe, ~bf91b3.tmp, cmd.exe', '_uninsep.bat, ~bf91b3.tmp', ''),
		createData('087edde0622ecb1cea3bd5c1f537e8fca62213898f63b8ebe281cafa945ef41f', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe, iexplore.exe, iexplore.exe', '4qav9z49.txt, rt029vjj.txt, data_1, visited links, en-us.4, 5080dc7a65db6a5960ecd874088f3328_6cba2c06d5985dd95ae59af8fc7c6220, 6bada8974a10c4bd62cc921d13e43b18_c9fb72b5ae80778a08024d8b0fdecc6f, 6bada8974a10c4bd62cc921d13e43b18_d9817bd5013875ad517da73475345203, cfe86dbbe02d859dc92f1e17e0574ee8_fdb452422670e72edd3fb3d65568f821, 1bb09beec155258835c193a7aa85aa5b_a7d868cacbed02bb3ae1bed5bf57477f, 5080dc7a65db6a5960ecd874088f3328_862ba1770b2fee013603d2ff9abeafda, 50d6b15d9f2dce1edbb0c098625fbe47_281ac807de0fef15f2ca9911fe760a9b, 5457a8ce4b2a7499f8299a013b6e1c7c_ce50f893881d43dc0c815e4d80faf2b4, 57c8edb95df3f0ad4ee2dc2b8cfd4157, 64dcc9872c5635b1b7891b30665e0558_5552c20a2631357820903fd38a8c0f9f, 6bada8974a10c4bd62cc921d13e43b18_beb37abadf39714871232b4792417e04, 9ec3b71635f8ba3fc68de181a104a0ef_f6c39ef89d8a3a72327d8412589658b2, f5f320a94d4d2b4465d8f17e2bb2d351_812802843ca659845ba7d7a677fd1258, f5f320a94d4d2b4465d8f17e2bb2d351_d7dfc4e6d0b2c27c3ca814d5c740a72b, a9r4vaw1u_86yoh2_hk.tmp', 'cdnjs.cloudflare.com, code.jquery.com, fonts.googleapis.com, fonts.gstatic.com, ocsp.comodoca4.com, ocsp.pki.goog, ocsp.trust-provider.com, uberatsr.com'),
		createData('4fdab7f5ffda3887f384c18bd6822748c4bbb9678b1b347d22e4a3adef4ca600', 'RTF document', 'winword.exe, doc.exe, fltldr.exe', 'doc.exe', 'fruityblue.com, http'),
		createData('37774b6eaef212f324d2db5e5049d636275d1609e228f469fd21a9ab44f96852', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links, a9rungwu3_o6yi0q_1rc.tmp', ''),
		createData('9ba80e6bde31488696d1c3dfaff3c59c7eff424c56f6ed0054b981628ef97221', 'EXE', 'dfrgnet.exe, dfrgelog.exe, services.exe, svchost.exe, svchost.exe, svchost.exe, svchost.exe, svchost.exe, svchost.exe, svchost.exe, spoolsv.exe, taskhost.exe, svchost.exe, taskhost.exe, infdinit.exe, ~8ea7.tmp, explorer.exe, svchost.exe, werfault.exe, werfault.exe, dfrgelog.exe, ~3e76.tmp, explorer.exe, infdinit.exe', 'dfrgnet.exe, infdinit.exe, dfrgelog.exe, ~8ea7.tmp, ~3e76.tmp', ''),
		createData('88a445946de97b832f2201d1570fa2dbffdb2c8498bf34de98c094d97dcec59d', 'Excel document', 'excel.exe, cmd.exe, powershell.exe', '', ''),
		createData('18c77e3768ba35f598abfd66f9d34e240574118efc0c5b33260ea14361ad7d19', 'EXE', 'jbstwpn55s.exe, dcuccgjaaaa.exe, cmd.exe', 'config.ini, config.ini, dcuccgjaaaa.exe, killfile2.bat', ''),
		createData('f45b2629a564fb1d28ab749dcd979f5356df422e8cbd99c31465e2d9ec33e285', 'RTF document', 'winword.exe, eqnedt32.exe', 'index.dat, quotations.lnk, excludedictionaryen0409.lex', ''),
		createData('13f93bdfe918caaf0ff0a84fcff2bd7a754d2b2048d2ecd97a52c67e4a9cfbc6', 'EXE', '5bc1f1ce2a68a587b27623d5ec565995.exe, ~bf935e.tmp, cmd.exe', '_uninsep.bat, golfset.ini', ''),
		createData('6cb98e75af8c6946c172257d0fda6f5e0b28c5d386d3e9c5d2a8b7e030b4bd57', 'EXE', 'brave-portable-win64.exe, wmiprvse.exe, wmiprvse.exe', 'brave-portable.log', ''),
		createData('c378b56e42e3b630a0a23af724c4a16b8fd2c45bd442ff7e98dae59bebd0cf37', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links, a9rrt649f_1vgakat_1es.tmp', ''),
		createData('554b2a715c0fa66b36c21a3cef98cb7a90ea6a7c6093305690c40bda5f691c43', 'EXE', 'executable.5704.exe', '', ''),
		createData('9e394cd110191481be5dcd1c4fb3e5c001a95c1547d26308a725e0fffd6dc68d', 'Text file', 'wscript.exe, explorer.exe', '', ''),
		createData('a3bad541cf9bbc32c77ddaa97a89bdec09e91ce0ccf53c1c124f26383915bda3', 'Text file', 'powershell.exe', 'ysmxcdul761x30h7xc32.temp, 19hljpfk.0.cs, 19hljpfk.cmdline, 19hljpfk.out, 2wrpfjxh.0.cs, 2wrpfjxh.cmdline, 2wrpfjxh.out, 3yobisoo.0.cs, 3yobisoo.cmdline, 3yobisoo.out, 4jfx7_t2.0.cs, 4jfx7_t2.cmdline, 4jfx7_t2.out, 6idtxpjx.0.cs, 6idtxpjx.cmdline, 6idtxpjx.out, 7ynpbehs.0.cs, 7ynpbehs.cmdline, 7ynpbehs.out, _zeolc8i.0.cs', ''),
		createData('c2cde4457486cd9981d81d4d47d461fde71ccf4bc67e6f9920a7d5e4d01ea194', 'Excel document', 'excel.exe', 'transaccionesreclamobnahotsaleconcosto.lnk, index.dat', ''),
		createData('e0c00c957b14fb70015d56938aeb61b663c2b4772c373b7a608b2d9627eb2ad9', 'DLL', 'rundll32.exe, mssecsvc.exe, tasksche.exe, mssecsvc.exe', 'tasksche.exe, mssecsvc.exe', ''),
		createData('f0337689180b707d6a63fba70d4c8918fb45dac3d72d7db0bd470b22531c84bd', 'EXE', 'hddlowlevelformattool4.25.kor-portable.exe', '', ''),
		createData('e41d7c313d62539155e517ad673588ec8cc6849baff6cf0541a31603495665e3', 'EXE', '', '', ''),
		createData('6274cc64bb4523ad05f0cc6252af2719d98deb282df1f127057a0bccbfcdc471', 'EXE', 'download.exe', '', ''),
		createData('f89a90b64b9cdeac31104391e5b849a94185c3af18ef3df1690bfb9af42302da', 'EXE', '24d00187b4586fdc63ec64ba942355f7.exe, ~bf9382.tmp, cmd.exe', '_uninsep.bat, golfset.ini, ~bf9382.tmp', ''),
		createData('0a6c4c09d207de16c909b8050798555d616b7e2f0fa5f251aef84140047363bf', 'EXE', '06d294d7a0abdc4c71511792c97975dc.exe, ~bf9dd.tmp, cmd.exe', '_uninsep.bat, golfset.ini, ~bf9dd.tmp', ''),
		createData('fe642a65370e8766c292ce005280a1bace083c0ad86b150df8a486616ad84f80', 'EXE', '', '', ''),
		createData('9cca9318f49fc462fb8a254f4963c8971d7a90bd8ef2d93c90335edfdeb0a9a1', 'EXE', 'hg64.exe', '', ''),
		createData('6054f08069814bbdbe5281e83aa26688536ca7cd350c4f85ad488ce340299fcc', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links, a9rfz7ssn_1hm1wbf_21k.tmp, a9rwyrqxy_1hm1wbi_21k.tmp', ''),
		createData('491af7f738381eea9a14a85672b32dcbf27121020f662edfe2958f8016e87368', 'JAVA', 'javaw.exe, java.exe, java.exe', '.-2757773986786359017.jar, 17dfc292991c7c62.timestamp', ''),
		createData('ccf8a5c3f9743759c0ac2113ffb5b20f77be181bfd8d6d8b4ab9fbb3593258ea', 'EXE', '', '', ''),
		createData('4a33a145217676f554fccbde9ba38874da36f2667a96304fc4b37a1ebacb1af1', 'Compressed file', '', '', ''),
		createData('783a62f32b9fcfb07bc3abe9d3c711088617ae542b34635e53f40029936db6d3', 'EXE', 'a2bd07796426c896faa2936604b28911.exe, ~bf92e9.tmp, cmd.exe', '_uninsep.bat, golfset.ini, ~bf92e9.tmp', ''),
		createData('5095dc95a51b20bcac224cc88c25d0be735d8812c00f249db4b0b8b94f4b1281', 'RTF document', 'winword.exe, cmd.exe, cmd.exe, taskkill.exe, taskkill.exe, cmstp.exe', 'bb.txt, mxwkitojyktuy.txt, 2cb2ca3c.wmf, 41842d0d.wmf, 58b9e767.jpg, m.sct', 'download.msf360.com'),
		createData('22570850443af3c988981b1b8cd28d1d8e40e4c21a2a5df8ada4c1033933adc6', 'EXE', 'yjxo3iacd.exe, explorer.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe, yjxo3iacd.exe', 'sessionmsg.exe.bat, hvax64.lnk', ''),
		createData('602a8c387e67badeb150df02aed9a9ba1ab0ae1d5743de956d1bef60c510e7e2', 'EXE', 'il0inbfeq2o.exe, syswnt.exe, winlogon.exe, cmd.exe, cmd.exe', 'syswnt.exe, crobba.dll, _uninsep.bat, _uninsep.bat', '114.108.165.xn--1786-7y7g428a97g4rie5lzwebwg05fr1aq9o'),
		createData('0ad6298da481c573e0a179396a7dec3b35312faaf0bae47a7393babdefa00568', 'PDF document', 'acrord32.exe, rdrcef.exe, rdrcef.exe, rdrcef.exe', 'data_1, visited links', ''),
		createData('396b30e0e4cd8375422149d361e2f0e38642ebb689a04abcf4f8765ceb5a62cf', 'EXE', 'file.exe, file.exe, explorer.exe', 'ec679dec92129330b5b05a3aa424ac05_33d770d0-06bc-47c5-8714-222cdac43a71', ''),
		createData('5c1d83ab5883129f137ee29c9353a316184243828c2ac79b0c6f6997cff19919', 'EXE', 'rr3.exe, rr3.exe', 'rr3.exe, rr3.exe, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, chrysanthemum.jpg, chrysanthemum.jpg.docm, desert.jpg, desert.jpg.docm, desktop.ini, desktop.ini.docm, koala.jpg, koala.jpg.docm, lighthouse.jpg, lighthouse.jpg.docm, desktop.ini, desktop.ini.docm, google chrome.lnk, google chrome.lnk.docm, ntuser.dat.log, ntuser.dat.log.docm, ntuser.dat.log1, ntuser.dat.log1.docm, ntuser.ini, ntuser.ini.docm, desktop.ini, desktop.ini.docm, indexed locations.search-ms, indexed locations.search-ms.docm, desktop.ini, desktop.ini.docm, windows live spaces.url, windows live spaces.url.docm, web slice gallery.url, web slice gallery.url.docm, administrator.contact, administrator.contact.docm, iconcache.db, iconcache.db.docm, 2720de842c148e18c1e0270abef877c91c879e2b7ab4070b193c1eff3f1ac1ca, bootsect.bak, bootsect.bak.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, wildlife.wmv, wildlife.wmv.docm, desktop.ini, desktop.ini.docm, win7_scenic-demoshort_raw.wtv, win7_scenic-demoshort_raw.wtv.docm, hydrangeas.jpg, hydrangeas.jpg.docm, jellyfish.jpg, jellyfish.jpg.docm, penguins.jpg, penguins.jpg.docm, tulips.jpg, tulips.jpg.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, kalimba.mp3, kalimba.mp3.docm, maid with the flaxen hair.mp3, maid with the flaxen hair.mp3.docm, sleep away.mp3, sleep away.mp3.docm, desktop.ini, desktop.ini.docm, recordedtv.library-ms, recordedtv.library-ms.docm, desktop.ini, desktop.ini.docm, adobe reader x.lnk, adobe reader x.lnk.docm, desktop.ini, desktop.ini.docm, mozilla firefox.lnk, mozilla firefox.lnk.docm, ntuser.dat, ntuser.dat.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tm.blf, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tm.blf.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000001.regtrans-ms, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000001.regtrans-ms.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000002.regtrans-ms, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000002.regtrans-ms.docm, desktop.ini, desktop.ini.docm, everywhere.search-ms, everywhere.search-ms.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.lnk, desktop.lnk.docm, downloads.lnk, downloads.lnk.docm, recentplaces.lnk, recentplaces.lnk.docm, desktop.ini, desktop.ini.docm, get windows live.url, get windows live.url.docm, windows live gallery.url, windows live gallery.url.docm, windows live mail.url, windows live mail.url.docm, msn autos.url, msn autos.url.docm, msn entertainment.url, msn entertainment.url.docm, msn money.url, msn money.url.docm, msn sports.url, msn sports.url.docm, msn.url, msn.url.docm, msnbc news.url, msnbc news.url.docm, ie add-on site.url, ie add-on site.url.docm, ie site on microsoft.com.url, ie site on microsoft.com.url.docm, microsoft at home.url, microsoft at home.url.docm, microsoft at work.url, microsoft at work.url.docm, microsoft store.url, microsoft store.url.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, jaureglist.xml, jaureglist.xml.docm, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, restore-my-files.txt, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, chrysanthemum.jpg, chrysanthemum.jpg.docm, desert.jpg, desert.jpg.docm, desktop.ini, desktop.ini.docm, koala.jpg, koala.jpg.docm, lighthouse.jpg, lighthouse.jpg.docm, desktop.ini, desktop.ini.docm, google chrome.lnk, google chrome.lnk.docm, ntuser.dat.log, ntuser.dat.log.docm, ntuser.dat.log1, ntuser.dat.log1.docm, ntuser.ini, ntuser.ini.docm, desktop.ini, desktop.ini.docm, indexed locations.search-ms, indexed locations.search-ms.docm, desktop.ini, desktop.ini.docm, windows live spaces.url, windows live spaces.url.docm, web slice gallery.url, web slice gallery.url.docm, administrator.contact, administrator.contact.docm, iconcache.db, iconcache.db.docm, bootsect.bak, bootsect.bak.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, wildlife.wmv, wildlife.wmv.docm, desktop.ini, desktop.ini.docm, win7_scenic-demoshort_raw.wtv, win7_scenic-demoshort_raw.wtv.docm, hydrangeas.jpg, hydrangeas.jpg.docm, jellyfish.jpg, jellyfish.jpg.docm, penguins.jpg, penguins.jpg.docm, tulips.jpg, tulips.jpg.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, kalimba.mp3, kalimba.mp3.docm, maid with the flaxen hair.mp3, maid with the flaxen hair.mp3.docm, sleep away.mp3, sleep away.mp3.docm, desktop.ini, desktop.ini.docm, recordedtv.library-ms, recordedtv.library-ms.docm, desktop.ini, desktop.ini.docm, adobe reader x.lnk, adobe reader x.lnk.docm, desktop.ini, desktop.ini.docm, mozilla firefox.lnk, mozilla firefox.lnk.docm, ntuser.dat, ntuser.dat.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tm.blf, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tm.blf.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000001.regtrans-ms, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000001.regtrans-ms.docm, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000002.regtrans-ms, ntuser.dat{016888bd-6c6f-11de-8d1d-001e0bcde3ec}.tmcontainer00000000000000000002.regtrans-ms.docm, desktop.ini, desktop.ini.docm, everywhere.search-ms, everywhere.search-ms.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.lnk, desktop.lnk.docm, downloads.lnk, downloads.lnk.docm, recentplaces.lnk, recentplaces.lnk.docm, desktop.ini, desktop.ini.docm, get windows live.url, get windows live.url.docm, windows live gallery.url, windows live gallery.url.docm, windows live mail.url, windows live mail.url.docm, msn autos.url, msn autos.url.docm, msn entertainment.url, msn entertainment.url.docm, msn money.url, msn money.url.docm, msn sports.url, msn sports.url.docm, msn.url, msn.url.docm, msnbc news.url, msnbc news.url.docm, ie add-on site.url, ie add-on site.url.docm, ie site on microsoft.com.url, ie site on microsoft.com.url.docm, microsoft at home.url, microsoft at home.url.docm, microsoft at work.url, microsoft at work.url.docm, microsoft store.url, microsoft store.url.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, desktop.ini, desktop.ini.docm, jaureglist.xml, jaureglist.xml.docm', ''),
		createData('df49dd7f22d837193526e2b49cf42bce3b42d2a6751855d4fbc7e3c51ca297ab', '# ISO 9660 CD-ROM filesystem data \'Purchase Order\'', 'cmd.exe, isoburn.exe', '', ''),
		createData('f413e0b13f811b244e55a5e1af550e51e3ca9736a92dc04eec9d3f191bd6ef4c', 'Word document', 'winword.exe', 'inv_pl_bl.lnk, index.dat, fsf-ctbl.fsf, fsd-cnry.fsd', 'icmap.org.gh'),
		createData('4b3c3674ce0084c8c5b735a9ba4b279130263353be90313e4c58c9e1439c9faf', 'EXE', 'auditcse.com.exe, auditcse.com.exe, cmd.exe, notepad.exe, wscript.exe, cmd.exe, wscript.exe', 'auditcse.com.exe, cpoolhost.exe, cpoolhost, cpoolhost, auditcse.com, systemresetplatform.url, systemresetplatform.vbs, 5f4038dd8b, cfgi, cfg, r.vbs, r.vbs, dyutydaeqs.url, counters2.dat', 'pool.hashvault.pro, soloformin.linkpc.net'),
		createData('fe11d246f210d4a6e5887393de0e640ed5ca12163b4efcf17dcf30cf199ba9ad', 'Compressed file', '', '', ''),
		createData('3146d5a7ebe1c0b454db3a5a60e281e2c466781b44ff9db283a0ed184270335e', 'EXE', 'out-725217797.bin.exe, out-725217797.bin.exe, host.exe, host.exe', 'host.exe, 04-06-2019', 'bushaka0.myq-see.com'),

	];

    return (
      <div className={classes.root}>
		<Header />
			<Grid
				container
				spacing={8}
				direction="row"
				alignItems="center"
				justify="center"
				style={{minHeight: '75vh' }}
				>
				<Grid item xs={12}>
					<Typography variant="h6" align="left">
						MALDATABASE Malware Samples
					</Typography>
					<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>SHA256</TableCell>
						<TableCell align="left">Type</TableCell>
						<TableCell align="left">Processes</TableCell>
						<TableCell align="left">File</TableCell>
						<TableCell align="left">Domain</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.sha}
						  </TableCell>
						  <TableCell align="left">{row.type}</TableCell>
						  <TableCell align="left">{row.proc}</TableCell>
						  <TableCell align="left">{row.file}</TableCell>
						  <TableCell align="left">{row.domain}</TableCell>
						</TableRow>
					  ))}
					</TableBody>
				  </Table>
			  </Grid>
			  <Grid item xs={12}>
				<Footer />
			  </Grid>
		  </Grid>
      </div>
    );
  }
}

Data_MDB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Data_MDB);
